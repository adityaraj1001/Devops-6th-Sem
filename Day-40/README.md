# 🚀 Day 40 - Canary Deployment (Kubernetes Advanced)

---

## 📌 Objective

* Deploy new version gradually
* Reduce risk in production
* Control traffic flow

---

## 🧠 What is Canary Deployment?

A strategy where:

* Small % of users → new version
* Remaining users → stable version

---

## 🔄 Architecture

Users → Service → Stable + Canary Pods

---

## ⚙️ Deployment Steps

```bash
kubectl apply -f stable-deployment.yaml
kubectl apply -f canary-deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

---

## 📊 Traffic Distribution

* Stable → 80%
* Canary → 20%

---

## 🧪 Testing

* Monitor logs
* Check performance
* Validate new version

---

## 🔄 Rollback

```bash
kubectl delete deployment app-canary
```

---

## 💡 Benefits

* Safe deployment
* Minimal risk
* Easy rollback

---

## ⚠️ Challenges

* Requires monitoring
* Needs traffic control
* More complex setup

---

## 🧠 Learnings

* Advanced deployment strategy
* Traffic splitting
* Risk management

---

## 🎯 Outcome

Successfully implemented canary deployment strategy 🚀

---

## ⭐ Note

Used by companies like:

* Netflix
* Amazon
* Google
