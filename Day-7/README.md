# 💾 Day 7 - Docker Storage (Volumes & Bind Mounts)

---

## 📌 Objective

* Understand Docker storage
* Learn volumes and bind mounts
* Persist data outside containers

---

## 🧠 Why Storage is Needed?

Containers are **ephemeral** (temporary).
👉 When container stops → data is lost ❌

Solution → **Volumes & Bind Mounts**

---

## 📦 Docker Volumes

### Create Volume

```bash id="d7v1"
docker volume create my-volume
```

---

### Use Volume

```bash id="d7v2"
docker run -d -v my-volume:/data ubuntu
```

---

### List Volumes

```bash id="d7v3"
docker volume ls
```

---

## 📂 Bind Mounts

### Mount local folder

```bash id="d7v4"
docker run -d -v /host/path:/container/path ubuntu
```

---

## 🔍 Difference

| Feature           | Volume     | Bind Mount  |
| ----------------- | ---------- | ----------- |
| Managed by Docker | ✅          | ❌           |
| Performance       | High       | Medium      |
| Use case          | Production | Development |

---

## 🧪 Practical Example

```bash id="d7v5"
docker run -it -v my-volume:/data ubuntu bash
```

Then inside container:

```bash id="d7v6"
cd /data
echo "Hello DevOps" > file.txt
```

---

## 💡 Pro Tips

* Use volumes for databases
* Avoid bind mounts in production
* Always backup volumes

---

## 🎯 Outcome

Data persisted even after container stops.
