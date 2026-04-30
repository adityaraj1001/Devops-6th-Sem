# 🚀 Day 16 - Full Node.js + MySQL API (Dockerized)

---

## 📌 Objective

* Build real backend API
* Connect Node.js with MySQL
* Run multi-container system

---

## 🧠 Architecture

User → Node API → MySQL Database

---

## ⚙️ Run Project

```bash
docker-compose up --build
```

---

## 🌐 API Endpoints

### Home

```bash
GET /
```

---

### Initialize Table

```bash
GET /init
```

---

### Add User

```bash
POST /add
Body:
{
  "name": "Aditya"
}
```

---

### Get Users

```bash
GET /users
```

---

## 🧪 Testing (Example)

```bash
curl -X POST http://localhost:3000/add \
-H "Content-Type: application/json" \
-d '{"name":"Aditya"}'
```

---

## 📊 Output Example

```json
[
  {
    "id": 1,
    "name": "Aditya"
  }
]
```

---

## ⚠️ Common Issues

### ❌ DB not ready

✔ Fix:

* Wait a few seconds before API call

---

### ❌ Connection error

✔ Fix:

* Check service name (`db`)

---

## 💡 Pro Tips

* Use service name instead of localhost
* Use environment variables (next step)
* Add retry logic for DB connection

---

## 🧠 Learnings

* API development
* Database integration
* Docker networking
* Microservices architecture

---

## 🎯 Outcome

Successfully built full backend API with database using Docker.

---

## ⭐ Note

This is a **real DevOps project-level implementation** 🚀
