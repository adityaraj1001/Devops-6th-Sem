# Docker Logs & Exec

## Docker Logs
Used to view container output logs.

### Command:
docker logs <container_id>

## Docker Exec
Used to run commands inside a running container.

### Command:
docker exec -it <container_id> /bin/bash

## Example:
docker run -it ubuntu
docker exec -it <container_id> /bin/bash

## Use Case:
- Debugging container
- Checking running processes
