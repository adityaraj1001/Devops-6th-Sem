# 🔄 Day 4 - Docker Container Lifecycle

---

## 📌 Objective

* Understand lifecycle of a container
* Learn different container states
* Manage containers efficiently

---

## 🧠 What is Container Lifecycle?

A container goes through different stages from creation to deletion.

---

## 🔁 Lifecycle Stages

1. **Created** → Container is created but not started
2. **Running** → Container is active
3. **Paused** → Temporarily stopped
4. **Stopped** → Execution stopped
5. **Removed** → Container deleted

---

## 📊 Lifecycle Diagram

Create → Start → Run → Stop → Remove

---

## ▶️ Commands

### Create container

```bash
docker create ubuntu
```

---

### Start container

```bash
docker start <container_id>
```

---

### Run container

```bash
docker run ubuntu
```

---

### Pause container

```bash
docker pause <container_id>
```

---

### Unpause container

```bash
docker unpause <container_id>
```

---

### Stop container

```bash
docker stop <container_id>
```

---

### Kill container (force stop)

```bash
docker kill <container_id>
```

---

### Remove container

```bash
docker rm <container_id>
```

---

## 🧪 Practical Work

✔ Created container
✔ Started and stopped container
✔ Paused and resumed container
✔ Removed container

---

## 📸 Screenshots

Include:

* docker ps
* docker ps -a
* lifecycle commands

---

## ⚠️ Common Errors

### ❌ Cannot remove running container

✔ Fix:

```bash
docker stop <container_id>
```

---

### ❌ Container not found

✔ Fix:

```bash
docker ps -a
```

---

## 💡 Pro Tips

* Use `docker run` instead of create + start
* Always stop before removing
* Use `docker ps -a` to track all containers

---

## 🧠 Learnings

* Container lifecycle stages
* Managing container states
* Efficient container handling

---

## 🎯 Outcome

Successfully understood and managed Docker container lifecycle.

---

## ⭐ Note

Lifecycle management is essential for **container control in DevOps**
