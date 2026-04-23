# 🐍 Day 9 - Dockerizing Flask App

---

## 📌 Objective

Run Python Flask app using Docker.

---

## ⚙️ Build Image

```bash id="d9v1"
docker build -t flask-app .
```

---

## ▶️ Run Container

```bash id="d9v2"
docker run -d -p 5000:5000 flask-app
```

---

## 🌐 Output

http://localhost:5000

---

## 🧠 Learnings

* Dockerizing Python apps
* Dependency management
* Running APIs inside containers
