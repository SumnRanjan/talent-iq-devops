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

## 📂 Project Structure

```
TALENT-Q/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
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
│   ├── .env
│   └── package.json
│
└── README.md
```

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
