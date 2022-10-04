#!/usr/bin/env bash
echo "STARTING: ${0}"
BASE=./ci/tools/terraform
$BASE/terraforn init 
$BASE/terraform workspace select $1 || terraform workspace new $1
$BASE/terraform ${@:2}