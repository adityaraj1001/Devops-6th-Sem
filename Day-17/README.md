# 📦 Day 17 - Docker Compose Structure

## 📌 Key Components

### version

Defines compose file version

### services

Defines containers

### volumes

Persistent storage

### networks

Container communication

---

## 📄 Example

```yaml
version: '3'

services:
  web:
    image: nginx
    ports:
      - "8080:80"
```

---

## 🧠 Learnings

* YAML structure
* Service configuration
* Networking basics
