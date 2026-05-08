# ⛵ Day 41 - Helm Charts (Kubernetes Package Manager)

---

# 📌 Objective

* Learn Helm basics
* Package Kubernetes applications
* Use reusable templates
* Simplify deployments

---

# 🧠 What is Helm?

Helm is a package manager for Kubernetes.

👉 It helps:

* Manage deployments
* Reuse configurations
* Simplify Kubernetes YAML files

---

# ⚙️ Helm Architecture

```text id="l83w7q"
Helm Chart → Templates → Kubernetes Resources
```

---

# 📦 What is a Helm Chart?

A Helm chart contains:

* Deployment templates
* Service templates
* Configurations

---

# 📂 Helm Chart Structure

```text id="mjlwm4"
Chart.yaml
values.yaml
templates/
```

---

# ⚙️ Install Helm Chart

```bash id="n2qg96"
helm install myapp ./myapp-chart
```

---

# 🔍 Check Releases

```bash id="2xlp4m"
helm list
```

---

# 🔄 Upgrade Release

```bash id="xj50t7"
helm upgrade myapp ./myapp-chart
```

---

# ❌ Uninstall Release

```bash id="1y8hrn"
helm uninstall myapp
```

---

# 🧪 Practical Work

✔ Created Helm chart
✔ Added deployment template
✔ Added service template
✔ Installed app using Helm

---

# 📊 Benefits of Helm

✅ Reusable templates
✅ Easy upgrades
✅ Simplified deployments
✅ Better configuration management

---

# 💡 Real-World Usage

Used in:

* Kubernetes production systems
* Microservices deployments
* Cloud-native applications

---

# ⚠️ Common Issues

❌ YAML syntax error
✔ Fix:

```bash id="u7ndzl"
helm lint ./myapp-chart
```

---

## ❌ Release already exists

✔ Fix:

```bash id="gn43ul"
helm uninstall myapp
```

---

# 📸 Screenshots

Include:

* helm list
* helm install output
* running pods

---

# 🧠 Learnings

* Helm chart structure
* Template-based deployments
* Kubernetes package management

---

# 🎯 Outcome

Successfully deployed Kubernetes application using Helm 🚀

---

# ⭐ Note

Helm is widely used in modern Kubernetes and DevOps environments.
