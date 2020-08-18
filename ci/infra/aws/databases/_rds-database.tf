resource "aws_db_instance" "mxmd_db" {
  identifier              = "${local.prefix}-db"
  name                    = "newsfeed"
  allocated_storage       = 10
  storage_type            = "gp2"
  engine                  = "postgres"
  engine_version          = "11.4"
  instance_class          = "db.t2.micro"
  db_subnet_group_name    = aws_db_subnet_group.mxmd_db_sg.name
  username                = var.db_username
  password                = var.db_password
  backup_retention_period = 0
  multi_az                = ! local.debug # Multi-AZ is enabled for production only.
  skip_final_snapshot     = true          # Avoiding problems when running 'destroy'.
  vpc_security_group_ids  = [aws_security_group.mxmd_sg.id]

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-db")
  )
}

resource "aws_db_subnet_group" "mxmd_db_sg" {
  name = "${local.prefix}-db-sg"
  subnet_ids = [
    aws_subnet.private_a.id,
    aws_subnet.private_b.id,
  ]

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-db-sg")
  )
}

resource "aws_security_group" "mxmd_sg" {
  name        = "${local.prefix}-rds-inbound-access"
  description = "Allow access to the RDS database instance"
  vpc_id      = aws_vpc.mxmd_vpc.id
  tags        = local.common_tags

  ingress {
    protocol  = "tcp"
    from_port = 5432
    to_port   = 5432
    security_groups = [
      aws_security_group.bastion.id,
      aws_security_group.ecs_service.id
    ]
  }
}