variable "prefix" { default = "mxmd" }
variable "project" { default = "newsfeed" }
variable "contact" { default = "contato@maximinder.com.br" }
variable "bastion_key" { default = "newsfeed-bastion" }
variable "db_username" { description = "RDS database username" }
variable "db_password" { description = "RDS database password" }
variable "ecr_image_address_ui" { default = "061290145490.dkr.ecr.us-east-1.amazonaws.com/newsfeed/ui:latest" }
variable "ecr_image_address_api" { default = "061290145490.dkr.ecr.us-east-1.amazonaws.com/newsfeed/api:latest" }