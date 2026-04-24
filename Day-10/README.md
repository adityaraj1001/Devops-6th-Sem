# 🚀 Day 10 - Multi-Stage Docker Builds

---

## 📌 Objective

* Reduce Docker image size
* Improve build efficiency
* Understand multi-stage builds

---

## 🧠 What is Multi-Stage Build?

Multi-stage builds allow using **multiple FROM statements**
to create optimized final images.

---

## 🔹 Why Use It?

* Smaller image size
* Better performance
* Secure builds
* Removes unnecessary files

---

## ⚙️ Build Image

```bash
docker build -t multi-stage-app .
```

---

## ▶️ Run Container

```bash
docker run multi-stage-app
```

---

## 📊 Output

Multi-stage Docker Build 🚀

---

## 📉 Before vs After

| Without Multi-Stage | With Multi-Stage |
| ------------------- | ---------------- |
| Large Image ❌       | Small Image ✅    |
| Slow build ❌        | Fast build ✅     |

---

## 💡 Real Use Case

Used in:

* Node.js apps
* Java (Maven builds)
* Python apps

---

## 🧠 Learnings

* Multi-stage Dockerfile structure
* Image optimization
* Efficient container builds

---

## 🎯 Outcome

Built optimized Docker image using multi-stage technique.
