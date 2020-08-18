#!/usr/bin/env bash
echo "STARTING: ${0}"
./ci/scripts/utils/terraform_exec.sh \
  $(./ci/) \
  destroy \
  -auto-approve