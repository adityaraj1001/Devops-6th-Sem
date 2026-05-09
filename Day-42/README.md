<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:141E30,50:243B55,100:0F2027&height=200&section=header&text=Day%2042%20-%20Kubernetes%20CI%2FCD&fontSize=42&fontColor=ffffff&fontAlignY=38&desc=Jenkins%20%7C%20Docker%20%7C%20Helm%20%7C%20Kubernetes&descAlignY=60&descSize=18"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1000&color=36BCF7&center=true&vCenter=true&width=600&lines=🚀+Automated+Kubernetes+Deployment;⚙️+CI%2FCD+with+Jenkins+%26+Helm;☸️+Production-Style+DevOps+Workflow"/>

</div>

---

# 🚀 Day 42 - Kubernetes CI/CD Pipeline

<div align="center">

![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-red?style=for-the-badge\&logo=jenkins)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue?style=for-the-badge\&logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge\&logo=kubernetes)
![Helm](https://img.shields.io/badge/Helm-Package_Manager-0F1689?style=for-the-badge\&logo=helm)

</div>

---

# 📌 Objective

This project demonstrates a **production-style CI/CD pipeline** using:

* ⚙️ Jenkins Pipeline
* 🐳 Docker Image Build
* ☸️ Kubernetes Deployment
* ⛵ Helm Charts

The workflow automates the complete deployment lifecycle from code push to Kubernetes deployment.

---

# 🧠 Architecture

<div align="center">

```text id="t8w1xg"
Developer → GitHub → Jenkins → Docker → Helm → Kubernetes
```

</div>

---

# ⚙️ Workflow

| Step | Description                             |
| ---- | --------------------------------------- |
| 1️⃣  | Developer pushes code to GitHub         |
| 2️⃣  | Jenkins pipeline triggers automatically |
| 3️⃣  | Docker image is built                   |
| 4️⃣  | Helm deploys application                |
| 5️⃣  | Kubernetes runs containers              |

---

# 📂 Project Structure

```text id="ddmzvp"
Day-42/
│
├── Jenkinsfile
├── Dockerfile
├── app/
├── helm-chart/
├── README.md
├── commands.txt
└── screenshots/
```

---

# 🐳 Docker Build

## Build Image

```bash id="6grgtg"
docker build -t devops-cicd-app .
```

---

# ⚙️ Jenkins Pipeline

## Pipeline Stages

* ✅ Checkout Code
* ✅ Build Docker Image
* ✅ Push Image
* ✅ Deploy with Helm

---

# ☸️ Kubernetes Deployment

## Deploy using Helm

```bash id="g9dqva"
helm upgrade --install myapp ./helm-chart
```

---

## Check Resources

```bash id="jvkj4m"
kubectl get pods
kubectl get services
```

---

# 🌐 Access Application

```text id="4ct2zb"
http://<NodeIP>:30010
```

---

# 📊 Technologies Used

<div align="center">

| Technology | Purpose               |
| ---------- | --------------------- |
| Jenkins    | CI/CD Automation      |
| Docker     | Containerization      |
| Kubernetes | Orchestration         |
| Helm       | Deployment Management |
| GitHub     | Version Control       |

</div>

---

# 🧪 Practical Work

✔ Created Jenkins CI/CD pipeline
✔ Built Docker image automatically
✔ Deployed app using Helm
✔ Verified Kubernetes pods

---

# 📸 Screenshots

<div align="center">

📷 Jenkins Dashboard
📷 Pipeline Success
📷 Kubernetes Pods
📷 Helm Deployment

</div>

---

# ⚠️ Challenges & Fixes

| Problem                  | Solution                   |
| ------------------------ | -------------------------- |
| ❌ Pod CrashLoopBackOff   | Checked logs & fixed image |
| ❌ Helm install failed    | Used `helm lint`           |
| ❌ Service not accessible | Fixed NodePort mapping     |

---

# 💡 Key Learnings

* 🚀 End-to-end CI/CD automation
* 🐳 Docker image management
* ☸️ Kubernetes deployment workflow
* ⚙️ Helm-based application management

---

# 🔥 Real DevOps Concepts Used

✅ CI/CD Pipelines
✅ Infrastructure Automation
✅ Container Orchestration
✅ Deployment Management
✅ Production Workflow

---

# 🎯 Outcome

Successfully implemented a **production-style Kubernetes CI/CD pipeline** using Jenkins, Docker, Helm, and Kubernetes 🚀

---

# ⭐ Final Note

<div align="center">

💡 <b>"Automation is the backbone of modern DevOps."</b>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F2027,50:243B55,100:141E30&height=100&section=footer"/>

</div>
