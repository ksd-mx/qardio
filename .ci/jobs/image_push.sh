#!/usr/bin/env bash
echo "STARTING: ${0}"
sudo apt-get update
sudo apt-get install -y awscli
$(aws ecr get-login --no-include-email --region us-east-1)
./ci/scripts/utils/docker_push.sh \
    $ECR_REPO_UI $TRAVIS_BUILD_ID \
    "${TRAVIS_BUILD_DIR}/client/Dockerfile" \
    "./client"
./ci/scripts/utils/docker_push.sh \
    $ECR_REPO_API $TRAVIS_BUILD_ID \
    "${TRAVIS_BUILD_DIR}/server/Dockerfile" \
    "./server"