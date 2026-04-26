# 📊 Day 36 - Monitoring & Logging (Docker + System)

---

## 📌 Objective

* Monitor running containers
* Analyze logs
* Check system performance

---

## 🧠 Why Monitoring is Important?

In real-world DevOps:

* Applications must run 24/7
* Failures must be detected early
* Performance must be tracked

---

## 🐳 Docker Monitoring

### Check container stats

```bash
docker stats
```

👉 Shows:

* CPU usage
* Memory usage
* Network usage

---

### View logs

```bash
docker logs <container_id>
```

---

### Real-time logs

```bash
docker logs -f <container_id>
```

---

## 🖥️ System Monitoring

### CPU & Memory

```bash
top
```

---

### Advanced monitoring

```bash
htop
```

---

### Disk usage

```bash
df -h
```

---

### Memory usage

```bash
free -m
```

---

## 🧪 Practical Work

✔ Checked container performance
✔ Monitored logs
✔ Observed system usage
✔ Debugged running container

---

## 📸 Screenshots

Include:

* docker stats output
* logs output
* system monitoring

---

## ⚠️ Common Issues

### ❌ High CPU usage

✔ Fix:

* Optimize app
* Scale containers

---

### ❌ Memory leak

✔ Fix:

* Restart container
* Check logs

---

## 💡 Pro Tips

* Always monitor production apps
* Use logs for debugging
* Combine system + container monitoring

---

## 🧠 Learnings

* Performance monitoring
* Debugging using logs
* System resource tracking

---

## 🎯 Outcome

Successfully monitored containers and system performance.

---

## ⭐ Note

Monitoring is a **core DevOps responsibility** 🚀
