data "aws_ami" "amazon_linux" {
  owners      = ["amazon"]
  most_recent = true
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-2.0.20200722.0-x86_64-gp2"]
  }
}

resource "aws_instance" "mxmd_bastion" {
  ami                  = data.aws_ami.amazon_linux.id
  instance_type        = "t2.micro"
  user_data            = file("./aws/init/user-data.sh")
  iam_instance_profile = aws_iam_instance_profile.bastion.name
  key_name             = var.bastion_key
  # Swap the commented subnet config
  #  lines when you need to visit resources
  #  in a different subnet.
  subnet_id = aws_subnet.public_a.id
  # subnet_id = aws_subnet.public_b.id
  vpc_security_group_ids = [aws_security_group.bastion.id]
  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-bastion")
  )
}