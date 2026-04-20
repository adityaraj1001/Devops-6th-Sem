# 🚀 Day 14 - Dockerized Python Application

## 📌 Objective

Create a simple Python app and run it inside a Docker container.

---

## 📄 app.py

```python
print("Hello from Docker App 🚀")
```

---

## 📄 Dockerfile

```dockerfile
FROM python:3.9
WORKDIR /app
COPY app.py .
CMD ["python", "app.py"]
```

---

## ⚙️ Commands

```bash
docker build -t python-app .
docker run python-app
```

---

## 📊 Output

Hello from Docker App 🚀

---

## 🧠 Learnings

* How to dockerize a Python app
* Image build process
* Running custom containers
