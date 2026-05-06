# 🐳 Day 1 - Docker Fundamentals & Setup

---

# 📌 Objective

* Understand Docker basics
* Install Docker Desktop
* Learn Docker architecture
* Run first containers
* Explore Docker commands

---

# 🧠 What is Docker?

Docker is a containerization platform used to:

* Build applications
* Package dependencies
* Run apps consistently everywhere

---

# 🚀 Why Docker?

Before Docker:

* "Works on my machine" problem ❌
* Dependency conflicts ❌
* Slow deployments ❌

After Docker:

* Consistent environments ✅
* Fast deployment ✅
* Lightweight containers ✅

---

# 🏗️ Docker Architecture

Docker consists of:

| Component         | Description          |
| ----------------- | -------------------- |
| Docker Client     | Sends commands       |
| Docker Daemon     | Runs containers      |
| Docker Images     | Templates            |
| Docker Containers | Running applications |
| Docker Registry   | Stores images        |

---

# 🔄 Docker Workflow

```text id="7cf6uk"
Dockerfile → Image → Container → Deployment
```

---

# ⚙️ Docker Installation

## 🖥️ Install Docker Desktop

Steps:

1. Download Docker Desktop
2. Install application
3. Restart system
4. Start Docker Desktop

---

# 🔍 Verify Installation

```bash id="2fgjlwm"
docker --version
docker info
```

---

# 📦 Pull First Image

```bash id="1avh4z"
docker pull hello-world
```

---

# ▶️ Run First Container

```bash id="zcq8x7"
docker run hello-world
```

---

# 🧪 Run Ubuntu Container

```bash id="76o1x8"
docker run -it ubuntu
```

👉 `-it` means:

* `-i` → interactive
* `-t` → terminal

---

# 📋 List Containers

## Running containers

```bash id="kcfk0q"
docker ps
```

---

## All containers

```bash id="pbwbbs"
docker ps -a
```

---

# 📦 List Images

```bash id="fjl0h9"
docker images
```

---

# 🛑 Stop Container

```bash id="v8g9dl"
docker stop <container_id>
```

---

# ❌ Remove Container

```bash id="wzt0mr"
docker rm <container_id>
```

---

# 🧪 Practical Tasks Performed

✔ Installed Docker Desktop
✔ Verified Docker installation
✔ Pulled hello-world image
✔ Ran Ubuntu container
✔ Viewed images and containers

---

# 📊 Output Example

```text id="quz1lj"
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

---

# 📸 Screenshots

Include screenshots of:

* Docker Desktop
* hello-world output
* docker ps
* docker images

---

# ⚠️ Common Errors & Fixes

## ❌ Docker daemon not running

✔ Fix:

* Start Docker Desktop

---

## ❌ docker command not recognized

✔ Fix:

* Restart terminal/system

---

## ❌ Permission denied

✔ Fix:

* Run Docker Desktop as administrator

---

# 💡 Important Docker Concepts

## 🔹 Image

Blueprint/template

## 🔹 Container

Running instance of image

## 🔹 Registry

Stores Docker images

## 🔹 Volume

Persistent storage

## 🔹 Network

Communication between containers

---

# 🔥 Extra Practice

```bash id="7djqpi"
docker run nginx
docker run redis
docker run mongo
```

---

# 🌐 Real-World Use Cases

Docker is used in:

* Netflix
* Amazon
* Google
* Spotify

---

# 🧠 Key Learnings

* Docker architecture
* Running containers
* Managing images
* Container lifecycle basics

---

# 🎯 Outcome

Successfully installed Docker and ran first containers 🚀

---

# ⭐ Note

Docker is one of the most important tools in modern DevOps and cloud computing.
