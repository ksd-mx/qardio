#!/usr/bin/env bash
wget https://releases.hashicorp.com/terraform/"${1}"/terraform_"${1}"_linux_amd64.zip
unzip terraform_"${1}"_linux_amd64.zip
sudo mv terraform /usr/local/bin/
rm terraform_"${1}"_linux_amd64.zip