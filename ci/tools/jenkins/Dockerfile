FROM jenkins/jenkins:lts-alpine

USER root

RUN apk add --update --no-cache docker openrc
RUN rc-update add docker boot
RUN addgroup jenkins docker

USER jenkins