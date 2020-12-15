#!/bin/bash

mvn -f  strange-blog/backend/ spring-boot:build-image
docker-compose -f strange-blog/docker-compose.yaml up
