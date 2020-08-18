#!/usr/bin/env bash
echo "STARTING: ${0}"
cd ./ci/tools/terraform
terraform init --backend=false
terraform validate
terraform fmt --check
cd ./