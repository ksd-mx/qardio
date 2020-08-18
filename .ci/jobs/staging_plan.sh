#!/usr/bin/env bash
echo "STARTING: ${0}"
./ci/scripts/utils/terraform_initenv.sh
./ci/scripts/utils/terraform_exec.sh staging plan