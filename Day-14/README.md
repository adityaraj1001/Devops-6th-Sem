# 🚀 Day 14 - Dockerized Flask API (Mini Project)

---

## 📌 Objective

* Build a simple REST API
* Containerize using Docker
* Test application endpoints

---

## 🧠 Project Overview

This project demonstrates:

* Flask API development
* Docker containerization
* Running web services in containers

---

## 📦 API Endpoints

### Home

```bash
GET /
```

Response:

```
🚀 Docker Flask App Running
```

---

### API Endpoint

```bash
GET /api
```

Response:

```json
{
  "message": "Hello from API",
  "status": "success"
}
```

---

## ⚙️ Build Docker Image

```bash
docker build -t flask-api .
```

---

## ▶️ Run Container

```bash
docker run -d -p 5000:5000 flask-api
```

---

## 🌐 Access Application

* Home → http://localhost:5000
* API → http://localhost:5000/api

---

## 🧪 Testing

Run script:

```bash
bash test.sh
```

---

## 📊 Output Example

```
🚀 Docker Flask App Running
{"message":"Hello from API","status":"success"}
```

---

## 📸 Screenshots

Include:

* Running container
* Browser output
* API response

---

## ⚠️ Common Errors & Fixes

### ❌ Port already in use

✔ Fix:

```bash
docker stop <container_id>
```

---

### ❌ Module not found

✔ Fix:

* Check requirements.txt
* Rebuild image

---

## 💡 Best Practices

* Use lightweight base image (`python:3.9-slim`)
* Use `.dockerignore`
* Separate dependencies
* Keep containers small

---

## 🔥 Advanced Improvements

* Add environment variables
* Add database (MongoDB/MySQL)
* Use Docker Compose

---

## 🧠 Learnings

* API development
* Dockerizing web apps
* Testing endpoints
* Container networking

---

## 🎯 Outcome

Successfully built and deployed a Dockerized API application.

---

## ⭐ Note

This is your **first real DevOps project step** 🚀
