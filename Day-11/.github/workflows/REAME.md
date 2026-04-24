# ☁️ Day 11 - Docker Hub & Image Registry

---

## 📌 Objective

* Understand Docker Hub
* Push and pull Docker images
* Learn image versioning

---

## 🧠 What is Docker Hub?

Docker Hub is a **cloud registry** used to:

* Store Docker images
* Share images globally
* Manage versions

---

## 🔐 Login to Docker Hub

```bash
docker login
```

---

## 🏗️ Build Image

```bash
docker build -t my-app .
```

---

## 🏷️ Tag Image

```bash
docker tag my-app username/my-app:v1
```

---

## 🚀 Push Image

```bash
docker push username/my-app:v1
```

---

## 📥 Pull Image

```bash
docker pull username/my-app:v1
```

---

## 🔍 Check Images

```bash
docker images
```

---

## 📦 Versioning Example

```bash
username/my-app:v1
username/my-app:v2
```

---

## 🧪 Practical Work

✔ Created Docker Hub account
✔ Built Docker image
✔ Tagged image
✔ Pushed to Docker Hub
✔ Pulled image successfully

---

## 📸 Screenshots

Include:

* Docker Hub repository
* Push success output
* Pulled image

---

## ⚠️ Common Errors & Fixes

### ❌ Access denied

✔ Fix:

* Login again
* Check username

---

### ❌ Push failed

✔ Fix:

* Correct tag format
* Internet connection

---

## 💡 Pro Tips

* Use version tags (v1, v2)
* Keep images small
* Don’t push sensitive data

---

## 🧠 Learnings

* Image sharing
* Registry usage
* Version control for images

---

## 🎯 Outcome

Successfully pushed and pulled Docker images using Docker Hub.

---

## ⭐ Note

Docker Hub is used in **real DevOps pipelines** for deployment 🚀
