🚀 Day 42 - Kubernetes CI/CD Pipeline (Jenkins + Docker + Helm)
📌 Objective
Automate Kubernetes deployments
Integrate Jenkins with Helm
Build full CI/CD workflow
🧠 Architecture
GitHub → Jenkins → Docker → Helm → Kubernetes
⚙️ Pipeline Workflow
Developer pushes code
Jenkins pipeline starts
Docker image is built
Helm deploys app to Kubernetes
📦 Tools Used
Tool	Purpose
Jenkins	CI/CD automation
Docker	Containerization
Helm	Kubernetes package manager
Kubernetes	Container orchestration
▶️ Run Jenkins Pipeline
Build Now → Jenkins Pipeline
⚙️ Deploy with Helm
helm upgrade --install myapp ./helm-chart
🔍 Check Kubernetes Resources
kubectl get pods
kubectl get services
🌐 Access Application
http://<NodeIP>:30010
🧪 Practical Work

✔ Built Docker image
✔ Created Jenkins pipeline
✔ Used Helm for deployment
✔ Deployed app to Kubernetes

⚠️ Common Issues
❌ Helm deployment failed

✔ Fix:

helm lint ./helm-chart
❌ Pods not running

✔ Fix:

kubectl describe pod <pod_name>
💡 Pro Tips
Use Helm for reusable deployments
Keep pipelines automated
Use rolling updates in production
