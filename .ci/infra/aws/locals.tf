locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  debug  = terraform.workspace != "production"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    Owner       = var.contact
    ManagedBy   = "MAXIMINDER"
  }
}