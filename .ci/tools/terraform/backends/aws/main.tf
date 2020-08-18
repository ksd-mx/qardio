terraform {
  required_version = "~> 0.12"
  backend "s3" {
    encrypt        = true
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 2.44.0"
}

data "aws_region" "current" {}