
include .env

COMPOSE_CONFIG=-f docker-compose-development.yml

SHELL= /bin/sh

docker_compose_bin= $(shell command -v docker-compose 2> /dev/null)

up:
	$(docker_compose_bin) $(COMPOSE_CONFIG) up -d
down:
	$(docker_compose_bin) $(COMPOSE_CONFIG) down
generate:
	$(docker_compose_bin) $(COMPOSE_CONFIG) exec -T server yarn prisma generate

start:
	up && generate
