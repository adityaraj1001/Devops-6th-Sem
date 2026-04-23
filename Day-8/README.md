# 🌐 Day 8 - Dockerizing Node.js App

---

## 📌 Objective

Run a Node.js application inside Docker.

---

## ⚙️ Build Image

```bash id="d8v1"
docker build -t node-app .
```

---

## ▶️ Run Container

```bash id="d8v2"
docker run -d -p 3000:3000 node-app
```

---

## 🌐 Output

http://localhost:3000

---

## 🧠 Learnings

* Dockerizing backend apps
* Port mapping
* Running web servers in containers
