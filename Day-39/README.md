# 🔵🟢 Day 39 - Blue-Green Deployment (Zero Downtime)

---

## 📌 Objective

* Deploy application without downtime
* Switch traffic between versions
* Understand production deployment strategy

---

## 🧠 Concept

* Blue = current version
* Green = new version
* Switch traffic when ready

---

## 🔄 Workflow

1. Deploy Green version
2. Test Green
3. Switch traffic from Blue → Green
4. Remove Blue

---

## ⚙️ Switch Deployment

Update service:

```yaml
version: green
```

---

## 🧪 Practical Work

✔ Deployed two versions
✔ Switched traffic
✔ Achieved zero downtime

---

## 💡 Benefits

* No downtime
* Safe deployment
* Easy rollback

---

## 🧠 Learnings

* Deployment strategies
* Traffic switching
* Production practices

---

## 🎯 Outcome

Successfully implemented zero downtime deployment 🚀

---

## ⭐ Note

Used in **real production systems like Netflix, Amazon**
