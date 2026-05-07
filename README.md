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
git clone https://github.com/your-username/talent-iq-devops.git
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

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/talent-q.git
cd talent-q
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd Backend
npm install
```

#### Frontend

```bash
cd FrontEnd
npm install
```

---

## 🔑 Environment Variables

### Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri

CLERK_SECRET_KEY=your_clerk_secret
STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret
```

### Frontend `.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_STREAM_API_KEY=your_stream_key
VITE_BACKEND_URL=http://localhost:5000
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd Backend
npm run dev
```

### Start Frontend

```bash
cd FrontEnd
npm run dev
```

---

## 🔄 Application Flow

1. User logs in using Clerk Authentication
2. Creates or joins an interview room
3. Starts:

   * 🎥 Video call (Stream)
   * 💬 Chat system
4. Writes code in Monaco Editor
5. Code is sent to Judge0 API
6. Output is displayed instantly

---

## 📌 Key Modules

* `middleware/` → Auth protection & validation
* `controllers/` → Business logic
* `routes/` → API endpoints
* `lib/` → Integrations (Stream, Judge0, Axios)
* `components/` → UI components
* `hooks/` → Custom hooks

---

## 🚀 Future Enhancements

* 🔄 Real-time collaborative coding
* 🎥 Interview recording
* 🤖 AI-based code evaluation
* 📊 Analytics dashboard
* 📅 Interview scheduling

---

## 🤝 Contributing

Contributions are welcome!

```bash
git checkout -b feature-name
git commit -m "Added new feature"
git push origin feature-name
```
## 👨‍💻 Author

**Suman Ranjan**
