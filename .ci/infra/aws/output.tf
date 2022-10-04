output "db_host" { value = aws_db_instance.mxmd_db.address }
output "bastion_host" { value = aws_instance.mxmd_bastion.public_dns }
output "api_endpoint" { value = aws_lb.api.dns_name }