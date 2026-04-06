# Docker Environment Variables

Environment variables are used to pass configuration into containers.

## Using ENV in Dockerfile:
ENV MY_NAME=Aditya

## Using -e flag:
docker run -e MY_NAME=Aditya ubuntu

## Example:
docker run -e APP_ENV=production ubuntu

## Benefits:
- Dynamic configuration
- Secure data handling
