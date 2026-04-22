# 🐳 Day 12 - Docker Logs & Exec (Debugging Containers)

---

## 📌 Objective

* Understand how to debug containers
* Use Docker logs to monitor output
* Use docker exec to interact with running containers
* Inspect container behavior

---

## 🧠 Why Logs & Exec are Important?

In real-world DevOps:

* Applications fail ❌
* Containers crash ❌
* Services stop unexpectedly ❌

👉 Logs & exec help you:

* Find errors
* Debug issues
* Fix problems quickly

---

## 📊 Docker Logs

### 🔹 View container logs

```bash
docker logs <container_id>
```

👉 Shows:

* Application output
* Errors
* Execution details

---

### 🔹 Follow logs (real-time)

```bash
docker logs -f <container_id>
```

👉 Similar to `tail -f`

---

### 🔹 Show last few lines

```bash
docker logs --tail 10 <container_id>
```

---

## 🛠️ Docker Exec

### 🔹 Run command inside container

```bash
docker exec -it <container_id> /bin/bash
```

👉 Opens terminal inside container

---

### 🔹 Run single command

```bash
docker exec <container_id> ls
```

---

### 🔹 Check running processes

```bash
docker exec <container_id> ps aux
```

---

## 🔍 Inspect Container

```bash
docker inspect <container_id>
```

👉 Provides:

* IP address
* Environment variables
* Network details

---

## 🧪 Practical Example (Nginx)

### Run container

```bash
docker run -d --name my-nginx -p 8080:80 nginx
```

---

### Check logs

```bash
docker logs my-nginx
```

---

### Enter container

```bash
docker exec -it my-nginx /bin/bash
```

---

### Inside container

```bash
ls
cd /usr/share/nginx/html
cat index.html
```

---

## 📸 Screenshots

Include:

* docker logs output
* docker exec terminal
* nginx running in browser

---

## ⚠️ Common Errors & Fixes

### ❌ Container not found

✔ Fix:

```bash
docker ps
```

---

### ❌ Exec not working

✔ Fix:

* Container must be running
* Use correct container ID

---

### ❌ No logs available

✔ Fix:

* Ensure app is producing output

---

## 💡 Pro Tips

* Use logs to debug before restarting
* Use exec to inspect live containers
* Combine logs + inspect for full debugging

---

## 🔥 Advanced Usage

### Filter logs by time

```bash
docker logs --since 10m <container_id>
```

---

### Check environment variables

```bash
docker exec <container_id> env
```

---

## 🧠 Key Learnings

* Debugging containers
* Monitoring application logs
* Executing commands inside containers
* Inspecting runtime behavior

---

## 🎯 Outcome

Successfully used logs and exec to debug Docker containers.

---

## 🧠 Summary

* Logs = what happened
* Exec = what is happening
* Inspect = how it is configured

👉 Together they form complete debugging tools

---

## ⭐ Note

Debugging is one of the **most important DevOps skills** 🚀
