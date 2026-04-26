# ☸️ Day 37 - Kubernetes Advanced (Scaling & Updates)

---

## 📌 Objective

* Learn Kubernetes scaling
* Understand rolling updates
* Manage pods and deployments

---

## 🧠 Key Concepts

### Pods

Smallest unit in Kubernetes

### Deployment

Manages pods and replicas

### Service

Exposes application

### Autoscaling

Adjusts pods automatically

---

## ⚙️ Commands

### Apply deployment

```bash
kubectl apply -f deployment.yaml
```

---

### Apply service

```bash
kubectl apply -f service.yaml
```

---

### Enable autoscaling

```bash
kubectl apply -f scale.yaml
```

---

### Check pods

```bash
kubectl get pods
```

---

### Rolling update

```bash
kubectl set image deployment/advanced-app app-container=nginx:latest
```

---

### Scale manually

```bash
kubectl scale deployment advanced-app --replicas=3
```

---

## 📊 Real Use Case

* High traffic websites
* Cloud applications
* Microservices systems

---

## 📸 Screenshots

Include:

* Pods running
* Service output
* Scaling results

---

## 💡 Pro Tips

* Use autoscaling in production
* Always monitor pods
* Use rolling updates to avoid downtime

---

## 🧠 Learnings

* Kubernetes scaling
* Deployment management
* High availability

---

## 🎯 Outcome

Successfully scaled and managed Kubernetes application.

---

## ⭐ Note

Kubernetes is the **future of DevOps & cloud deployment** 🚀
