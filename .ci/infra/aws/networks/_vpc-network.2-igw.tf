resource "aws_internet_gateway" "mxmd_igw" {
  vpc_id = aws_vpc.mxmd_vpc.id

  tags = merge(
    local.common_tags,
    map("Name", "${local.prefix}-igw")
  )
}