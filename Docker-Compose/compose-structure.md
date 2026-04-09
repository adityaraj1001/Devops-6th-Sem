# Docker Compose Structure

## Key Components:

### version
Defines compose version.

### services
Defines containers.

### volumes
Stores persistent data.

### networks
Allows communication between services.

## Example:
services:
  web:
    image: nginx
