# 🐳 Day 1 - Docker Basics & Setup

---

## 📌 Objective

* Understand what Docker is
* Install Docker Desktop
* Run first container
* Learn basic Docker commands

---

## 🧠 What is Docker?

Docker is a platform that allows developers to **build, run, and manage applications in containers**.

👉 A container is a lightweight environment that includes:

* Application code
* Dependencies
* Runtime

---

## ⚙️ Installation

### 🖥️ Docker Desktop Installation

Steps:

1. Download Docker Desktop
2. Install and restart system
3. Open Docker Desktop

---

## 🔍 Verify Installation

```bash
docker --version
docker info
```

---

## 📦 Docker Architecture (Basic)

* **Docker Client** → Runs commands
* **Docker Daemon** → Executes commands
* **Docker Images** → Templates
* **Docker Containers** → Running instances

---

## 🐳 First Docker Command

### Pull Image

```bash
docker pull ubuntu
```

---

### Run Container

```bash
docker run -it ubuntu
```

👉 `-it` → interactive terminal

---

### List Running Containers

```bash
docker ps
```

---

### List All Containers

```bash
docker ps -a
```

---

### List Images

```bash
docker images
```

---

### Stop Container

```bash
docker stop <container_id>
```

---

### Remove Container

```bash
docker rm <container_id>
```

---

## 🧪 Practical Work

✔ Pulled Ubuntu image
✔ Ran container in interactive mode
✔ Viewed containers and images
✔ Stopped and removed container

---

## 📸 Screenshots

Screenshots included:

* Docker Desktop UI
* Running containers
* Terminal output

📂 (Check this folder for images)

---

## ⚠️ Common Errors & Fixes

### ❌ Error: Docker not recognized

✔ Fix: Restart system after installation

### ❌ Error: Permission denied

✔ Fix: Run Docker Desktop as administrator

---

## 💡 Key Concepts Learned

* Difference between image & container
* How to run and manage containers
* Basic Docker commands
* Docker environment setup

---

## 🔥 Extra Practice

Try these:

```bash
docker run hello-world
docker run -d nginx
docker ps
```

---

## 🎯 Outcome

Successfully installed Docker and executed basic commands.

---

## 🧠 Summary

* Docker simplifies application deployment
* Containers are lightweight and fast
* Basic commands help manage containers

---

## ⭐ Note

This is the first step towards mastering **DevOps & containerization** 🚀
