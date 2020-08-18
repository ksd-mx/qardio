data "template_file" "api_container_definitions" {
  template = file("./aws/templates/container-definitions.json.tpl")
  vars = {
    ui_image         = var.ecr_image_address_ui
    api_image        = var.ecr_image_address_api
    db_host          = aws_db_instance.mxmd_db.address
    db_name          = aws_db_instance.mxmd_db.name
    db_user          = aws_db_instance.mxmd_db.username
    db_pass          = aws_db_instance.mxmd_db.password
    log_group_name   = aws_cloudwatch_log_group.ecs_task_logs.name
    log_group_region = data.aws_region.current.name
  }
}