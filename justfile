export COMPOSE_FILE := "docker-compose.local.yml"

## Just does not yet manage signals for subprocesses reliably, which can lead to unexpected behavior.
## Exercise caution before expanding its usage in production environments.
## For more information, see https://github.com/casey/just/issues/2473 .


# Default command to list all available commands.
default:
    @just --list

# build: Build image.
build:
    @echo "Building image..."
    @docker compose build

# up: Start up containers.
up:
    @echo "Starting up containers..."
    @docker compose up -d --remove-orphans

# down: Stop containers.
down:
    @echo "Stopping containers..."
    @docker compose down

# prune: Remove containers and their volumes.
prune *args:
    @echo "Killing containers and removing volumes..."
    @docker compose down -v {{args}}

# logs: View container logs
logs *args:
    @docker compose logs -f {{args}}

# staging_build: Build staging image.
staging_build:
    @echo "Building staging image..."
    @docker compose -f docker-compose.staging.yml build

# staging_up: Start up staging containers.
staging_up:
    @echo "Starting up staging containers..."
    @docker compose -f docker-compose.staging.yml up -d --remove-orphans

# staging_down: Stop staging containers.
staging_down:
    @echo "Stopping staging containers..."
    @docker compose -f docker-compose.staging.yml down

# staging_prune: Remove staging containers and their volumes.
staging_prune *args:
    @echo "Killing staging containers and removing volumes..."
    @docker compose -f docker-compose.staging.yml down -v {{args}}

# staging_logs: View staging container logs
staging_logs *args:
    @docker compose -f docker-compose.staging.yml logs -f {{args}}
