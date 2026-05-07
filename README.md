# 🚀 Talent-IQ-DevOps

A cloud-native MERN-based real-time coding interview platform designed with scalable DevOps architecture using Docker, Kubernetes, AWS ECR, and NGINX Ingress Controller.

---

## 🌟 Features

- 🔐 Secure Authentication
- 🎥 Real-Time Video Calling
- 💬 Live Chat System
- 💻 Online Code Editor
- 👥 Group Interview Rooms
- ⚡ Responsive Modern UI
- 🐳 Docker Containerization
- ☸️ Kubernetes Orchestration
- 📦 AWS ECR Image Management
- 🌐 NGINX Ingress Load Balancing

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DaisyUI

### Backend
- Node.js
- Express.js
- MongoDB

### DevOps & Cloud
- Docker
- Kubernetes
- AWS ECR
- NGINX Ingress Controller

---

## 📂 Architecture

```text
React Frontend ─┐
Node Backend ───┼──> Docker Images ──> AWS ECR ──> Kubernetes Cluster
MongoDB ────────┘                              │
                                               ▼
                                    NGINX Ingress Controller
                                               │
                                               ▼
                                             Users
```

---

## 📂 Project Structure

```text
TALENT-IQ-DEVOPS/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── Dockerfile
│   ├── .env
│   └── package.json
│
├── FrontEnd/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   ├── judge.js
│   │   │   ├── stream.js
│   │   │   └── utils.js
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── .env
│   └── package.json
│
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── mongo-deployment.yaml
│   ├── services.yaml
│   └── ingress.yaml
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/SumnRanjan/talent-iq-devops.git
cd talent-iq-devops
```

---

## 🐳 Docker Setup

### Build Docker Images

```bash
docker build -t talent-iq-frontend ./FrontEnd
docker build -t talent-iq-backend ./Backend
```

### Run Containers

```bash
docker run -p 5173:5173 talent-iq-frontend
docker run -p 5000:5000 talent-iq-backend
```

---

## ☸️ Kubernetes Deployment

### Apply Kubernetes Configurations

```bash
kubectl apply -f k8s/
```

### Check Running Resources

```bash
kubectl get pods
kubectl get services
kubectl get ingress
```

---

## 📦 AWS ECR Workflow

### Create Repository

```bash
aws ecr create-repository --repository-name talent-iq
```

### Push Docker Image

```bash
docker tag talent-iq-backend:latest <aws-account-id>.dkr.ecr.<region>.amazonaws.com/talent-iq-backend

docker push <aws-account-id>.dkr.ecr.<region>.amazonaws.com/talent-iq-backend
```

---

## 🔄 DevOps Workflow

1. Build Docker Images
2. Push Images to AWS ECR
3. Deploy Containers to Kubernetes
4. Configure Services & Ingress
5. Expose Application through NGINX Ingress
6. Scale Application using Kubernetes

---

## 🚀 Future Enhancements

- 🔄 CI/CD Pipeline using Jenkins & GitHub Actions
- 📊 Monitoring with Prometheus & Grafana
- ⚡ Horizontal Pod Autoscaling
- 📦 Helm Chart Deployment
- 🔐 Secrets Management
- ☁️ AWS Cloud Deployment

---

## 👨‍💻 Author

**Suman Ranjan**

---