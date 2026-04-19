# 🚀 DevOps Complete Guide (Docker, CI/CD, Jenkins, Cloud)

---

## 📌 Introduction

DevOps is a combination of **Development + Operations** that focuses on:

* Faster delivery
* Automation
* Continuous Integration & Deployment (CI/CD)

---

## 🐳 Docker (Containerization)

### 🔹 What is Docker?

Docker is a platform used to **create, run, and manage containers**.

### 🔹 Basic Commands

```bash
docker --version
docker pull ubuntu
docker run -it ubuntu
docker ps
docker images
docker stop <container_id>
```

---

### 🔹 Dockerfile Example

```dockerfile
FROM ubuntu:latest
RUN apt-get update
CMD ["echo", "Hello DevOps"]
```

---

### 🔹 Concepts

* Image → blueprint
* Container → running instance
* Volume → storage
* Network → communication

---

## 📦 Docker Compose (Multi-Container)

### Example:

```yaml
version: '3'

services:
  web:
    image: nginx
    ports:
      - "8080:80"

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: root
```

---

## ⚙️ Git & GitHub

### Commands:

```bash
git init
git add .
git commit -m "message"
git push origin main
```

---

## ⚡ GitHub Actions (CI/CD)

### Workflow Example:

```yaml
name: CI Pipeline

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - run: echo "CI Running 🚀"
```

---

## 🔧 Jenkins (CI/CD Tool)

### Jenkins Pipeline:

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
```

---

## 🔄 CI/CD Pipeline Flow

```
Code → GitHub → Jenkins → Docker Build → Deploy → Run
```

---

## 🚀 Mini Project (Flask + Docker)

### app.py

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello DevOps 🚀"

app.run(host="0.0.0.0", port=5000)
```

---

### Dockerfile

```dockerfile
FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install flask
CMD ["python", "app.py"]
```

---

## ☁️ AWS Deployment (Basic)

### Steps:

1. Launch EC2 instance
2. Install Docker
3. Pull image
4. Run container

---

## 📊 Monitoring Commands

```bash
docker logs <id>
docker stats
docker inspect <id>
```

---

## 🧠 Key Learnings

* Containerization using Docker
* Multi-container apps
* CI/CD pipelines
* Automation using Jenkins
* Cloud deployment

---

## 📸 Screenshots

Refer to `/Screenshots` folder for:

* Docker containers
* Jenkins pipelines
* GitHub Actions runs

---

## 🎯 Conclusion

This document represents a **complete DevOps learning journey** including:

* Development
* Automation
* Deployment

💡 *Consistency + Practice = DevOps Mastery*

---

## ⭐ Final Note

If you find this useful, give this repo a ⭐
