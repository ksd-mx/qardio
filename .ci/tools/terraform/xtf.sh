#!/usr/bin/env bash
docker-compose -f $(find . -name docker-compose.tf.yml) run --rm terraform $@