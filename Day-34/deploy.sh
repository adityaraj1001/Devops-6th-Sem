#!/bin/bash

echo "🚀 Starting Deployment..."

# Build Docker image
echo "📦 Building Docker Image..."
docker build -t devops-app .

# Stop old container
echo "🛑 Stopping old container..."
docker rm -f devops-container || true

# Run new container
echo "▶️ Running new container..."
docker run -d -p 5000:5000 --name devops-container devops-app

# Check container status
echo "📊 Checking running containers..."
docker ps

echo "✅ Deployment Completed Successfully!"
