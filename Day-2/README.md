# 🐳 Day 2 - Dockerfile & Image Creation

---

## 📌 Objective

* Understand Dockerfile
* Learn how to build Docker images
* Run containers from custom images
* Understand Docker instructions

---

## 🧠 What is a Dockerfile?

A **Dockerfile** is a text file that contains instructions to **build a Docker image automatically**.

👉 It helps in:

* Automating setup
* Ensuring consistency
* Reproducible environments

---

## 📦 Dockerfile Structure

Basic structure:

```dockerfile
FROM <base_image>
RUN <command>
COPY <source> <destination>
CMD ["command"]
```

---

## 🐳 Simple Dockerfile Example

```dockerfile
# Use Ubuntu as base image
FROM ubuntu:latest

# Update packages
RUN apt-get update

# Default command
CMD ["echo", "Hello DevOps 🚀"]
```

---

## ⚙️ Important Dockerfile Instructions

### 🔹 FROM

Defines base image

### 🔹 RUN

Executes commands during build

### 🔹 COPY

Copies files from local system

### 🔹 WORKDIR

Sets working directory

### 🔹 CMD

Runs when container starts

### 🔹 ENV

Sets environment variables

---

## 🏗️ Build Docker Image

```bash
docker build -t my-image .
```

👉 `-t` → tag (name of image)
👉 `.` → current directory

---

## ▶️ Run Container from Image

```bash
docker run my-image
```

---

## 🔍 Check Images

```bash
docker images
```

---

## 🧪 Practical Work

✔ Created Dockerfile
✔ Built custom image
✔ Ran container successfully
✔ Verified output

---

## 📊 Output Example

```bash
Hello DevOps 🚀
```

---

## 📸 Screenshots

Include:

* Dockerfile code
* Terminal build output
* Running container

📂 (Check Day-2 folder)

---

## ⚠️ Common Errors & Fixes

### ❌ Error: failed to build image

✔ Fix: Check Dockerfile syntax

---

### ❌ Error: command not found

✔ Fix: Ensure correct base image

---

### ❌ Error: permission denied

✔ Fix: Run Docker as administrator

---

## 💡 Best Practices

* Use minimal base images
* Avoid unnecessary layers
* Use `.dockerignore` file
* Keep Dockerfile simple

---

## 🔥 Advanced Example (Python App)

```dockerfile
FROM python:3.9

WORKDIR /app

COPY . .

RUN pip install flask

CMD ["python", "app.py"]
```

---

## 🧠 Key Concepts Learned

* Dockerfile automation
* Image creation process
* Layered architecture
* Running custom containers

---

## 🎯 Outcome

Successfully created and ran a custom Docker image.

---

## 🧠 Summary

* Dockerfile automates container setup
* Images can be reused and shared
* Containers run from images

---

## ⭐ Note

Dockerfile is the **core of containerization** in DevOps 🚀
