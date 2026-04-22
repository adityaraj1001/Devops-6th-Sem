# ⚙️ Day 13 - Environment Variables in Docker

---

## 📌 Objective

* Understand environment variables in Docker
* Use ENV in Dockerfile
* Pass variables at runtime
* Use `.env` files for configuration

---

## 🧠 What are Environment Variables?

Environment variables are **key-value pairs** used to:

* Configure applications
* Store settings
* Avoid hardcoding values

👉 Example:

```bash
APP_ENV=production
PORT=5000
```

---

## 🐳 Using ENV in Dockerfile

### Example:

```dockerfile
FROM ubuntu:latest

ENV MY_NAME=Aditya
ENV APP_ENV=development

CMD ["printenv"]
```

👉 This prints all environment variables

---

## ▶️ Passing Variables at Runtime

```bash
docker run -e MY_NAME=Aditya ubuntu env
```

👉 Output shows environment variable

---

## 📦 Multiple Variables

```bash
docker run -e APP_ENV=production -e PORT=5000 ubuntu env
```

---

## 📄 Using .env File

### Create file:

```bash
.env
```

### Add:

```env
APP_ENV=production
PORT=5000
USER_NAME=Aditya
```

---

### Use with Docker Compose:

```yaml
version: '3'

services:
  app:
    image: ubuntu
    env_file:
      - .env
```

---

## 🔍 Verify Variables Inside Container

```bash
docker exec -it <container_id> env
```

---

## 🧪 Practical Example

### Run container with env variables:

```bash
docker run -e GREETING="Hello DevOps" ubuntu bash -c 'echo $GREETING'
```

👉 Output:

```
Hello DevOps
```

---

## 🔐 Why Environment Variables are Important?

* Avoid hardcoding credentials
* Secure sensitive data
* Easy configuration change
* Used in CI/CD pipelines

---

## ⚠️ Common Errors & Fixes

### ❌ Variable not showing

✔ Fix:

* Use correct syntax
* Check container logs

---

### ❌ .env not working

✔ Fix:

* Correct file path
* Use `env_file` in compose

---

### ❌ Wrong variable name

✔ Fix:

* Linux is case-sensitive

---

## 💡 Pro Tips

* Use `.env` file for large projects
* Never commit sensitive data
* Use secrets in production

---

## 🔥 Advanced Usage

### Default values:

```bash
docker run -e PORT=${PORT:-5000} ubuntu env
```

---

### Check specific variable:

```bash
docker exec <container_id> printenv PORT
```

---

## 🧠 Key Learnings

* Dynamic configuration
* Secure variable handling
* Integration with Docker Compose
* Runtime flexibility

---

## 🎯 Outcome

Successfully configured and used environment variables in Docker.

---

## 🧠 Summary

* ENV = build-time variables
* -e = runtime variables
* .env = external configuration

👉 Used in every real DevOps pipeline 🚀

---

## ⭐ Note

Environment variables are essential for **scalable and secure applications**
