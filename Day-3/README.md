# 🐳 Day 3 - Docker Container Management (run, ps, images, logs)

---

## 📌 Objective

* Understand how to run containers
* Manage running and stopped containers
* Work with Docker images
* Debug using logs and exec

---

## 🧠 Key Concepts

* **Container** → Running instance of an image
* **Image** → Blueprint/template
* **Detached mode** → Run container in background
* **Interactive mode** → Run with terminal

---

## ▶️ Running Containers

### Run container (interactive mode)

```bash
docker run -it ubuntu
```

👉 Opens terminal inside container

---

### Run container (detached mode)

```bash
docker run -d nginx
```

👉 Runs in background

---

### Run with port mapping

```bash
docker run -d -p 8080:80 nginx
```

👉 Access in browser: `localhost:8080`

---

## 📋 Listing Containers

### Running containers

```bash
docker ps
```

### All containers

```bash
docker ps -a
```

---

## 📦 Working with Images

### List images

```bash
docker images
```

### Remove image

```bash
docker rmi <image_id>
```

---

## 🛑 Container Control

### Stop container

```bash
docker stop <container_id>
```

### Start container

```bash
docker start <container_id>
```

### Remove container

```bash
docker rm <container_id>
```

---

## 🔍 Inspect Container

```bash
docker inspect <container_id>
```

👉 Shows:

* IP address
* Network
* Configuration

---

## 📊 Logs & Debugging

### View logs

```bash
docker logs <container_id>
```

---

### Run command inside container

```bash
docker exec -it <container_id> /bin/bash
```

👉 Used for debugging

---

## 🔄 Restart Container

```bash
docker restart <container_id>
```

---

## 🧪 Practical Work

✔ Ran Ubuntu container (interactive)
✔ Ran Nginx container (background)
✔ Used port mapping
✔ Viewed running containers
✔ Checked logs
✔ Executed commands inside container

---

## 🌐 Real Example (Nginx Web Server)

```bash
docker run -d -p 8080:80 nginx
```

👉 Open browser:

```
http://localhost:8080
```

✔ Nginx welcome page appears

---

## 📸 Screenshots

Include:

* Running containers (`docker ps`)
* Browser output (Nginx)
* Logs output

---

## ⚠️ Common Errors & Fixes

### ❌ Port already in use

✔ Fix:

```bash
docker stop <container_id>
```

---

### ❌ Container exits immediately

✔ Fix:

* Use interactive mode (`-it`)
* Check logs

---

### ❌ Command not found

✔ Fix:

* Use correct base image

---

## 💡 Pro Tips

* Use `-d` for background services
* Always check logs for debugging
* Use meaningful container names:

```bash
docker run -d --name my-nginx -p 8080:80 nginx
```

---

## 🧠 Key Learnings

* Container lifecycle management
* Running services inside containers
* Debugging using logs & exec
* Networking using port mapping

---

## 🎯 Outcome

Successfully managed Docker containers and explored real-world usage.

---

## 🧠 Summary

* Containers can run in different modes
* Docker commands help control lifecycle
* Logs and exec are essential for debugging

---

## ⭐ Note

This is the **core practical part of Docker** — used daily in DevOps 🚀
