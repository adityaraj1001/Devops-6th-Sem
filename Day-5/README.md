# 📦 Day 5 - Docker Images & Layers

---

## 📌 Objective

* Understand Docker images
* Learn about image layers
* Manage images efficiently

---

## 🧠 What is a Docker Image?

A Docker image is a **read-only template** used to create containers.

👉 It contains:

* OS
* Application code
* Dependencies

---

## 🧱 What are Layers?

Each Docker image is made up of **multiple layers**.

Example:

* Base OS layer
* Installed packages
* Application files

---

## 📊 Layer Concept

Each instruction in Dockerfile = new layer

---

## 🔍 Check Image Layers

```bash
docker history <image_name>
```

---

## 📦 Image Commands

### Pull image

```bash
docker pull ubuntu
```

---

### List images

```bash
docker images
```

---

### Remove image

```bash
docker rmi <image_id>
```

---

### Inspect image

```bash
docker inspect <image_id>
```

---

## 🧪 Practical Work

✔ Pulled Docker image
✔ Viewed image layers
✔ Inspected image details
✔ Removed unused images

---

## 📸 Screenshots

Include:

* docker images output
* docker history output
* inspect output

---

## ⚠️ Common Errors

### ❌ Image not found

✔ Fix:

```bash
docker pull <image_name>
```

---

### ❌ Cannot remove image

✔ Fix:

* Stop containers using image

---

## 💡 Pro Tips

* Use small base images
* Remove unused images
* Optimize layers in Dockerfile

---

## 🔥 Advanced Concept

### Copy-on-Write

* Containers share image layers
* Only changes are stored separately

---

## 🧠 Learnings

* Image structure
* Layer optimization
* Efficient image management

---

## 🎯 Outcome

Successfully understood Docker images and their layered architecture.

---

## ⭐ Note

Images are the **foundation of containerization**
