# ☸️ Day 35 - Kubernetes Deployment & Service

---

## 📌 Objective

* Understand Kubernetes basics
* Deploy application using YAML
* Expose app using Service

---

## 🧠 What is Kubernetes?

Kubernetes is a container orchestration tool used to:

* Manage containers
* Scale applications
* Handle deployments

---

## 📦 Deployment

* Defines application
* Manages replicas
* Ensures availability

---

## 🌐 Service

* Exposes application
* Provides networking
* Load balancing

---

## ⚙️ Commands

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get services
```

---

## 📊 Scaling Application

```bash
kubectl scale deployment devops-app --replicas=3
```

---

## 🔍 Check Status

```bash
kubectl describe deployment devops-app
```

---

## 📸 Screenshots

Include:

* Running pods
* Service details
* Scaling output

---

## 💡 Real Use Case

Used in:

* Cloud platforms (AWS, GCP)
* Microservices architecture
* High availability systems

---

## 🧠 Learnings

* Kubernetes architecture
* Deployment management
* Scaling applications

---

## 🎯 Outcome

Successfully deployed and scaled application using Kubernetes 🚀
