#!/bin/bash

echo "⚠️ Rolling back deployment..."

docker rm -f devops-container || true
docker run -d -p 5000:5000 --name devops-container devops-app:previous

echo "🔁 Rollback Completed!"
