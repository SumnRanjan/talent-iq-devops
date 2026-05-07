# 🚀 Talent-IQ

A full-stack MERN-based real-time coding interview platform that enables users to collaborate through video calls, live chat, and code execution in a shared environment.

---

## 🎓 Academic Project Information

### 📄 Project Report of Industry Oriented Hands-On Experience (IOHE)

**Project Title:** Talent-IQ

Submitted in partial fulfillment of the requirements for the award of degree of:

### 🎓 Bachelor of Engineering  
Computer Science and Engineering  
Chitkara University , Rajpura


---

## 👨‍💻 Submitted By

- **Suman Ranjan** — 2210990872  
- **Shaurya Thakur** — 2210990817  
- **Vanshika** — 2210990943  
- **Swayam Bansal** — 2210990883  

---

## 👩‍🏫 Supervised By

- **Dr. Monika Aggarwal**  
- Assistant Professor, CUIET  
- Chitkara University, Rajpura  

---

## 📊 Project Status

✅ Completed  

---

## 📌 Project Type

- Industry Oriented Hands-On Experience (IOHE)  
- Full Stack + Real-Time Collaboration System  

---

## 🌟 Features

* 🔐 **Authentication (Clerk)**  
  - Secure and scalable authentication  
  - Session management & protected routes  

* 🎥 **Real-Time Video Calls**  
  - Powered by Stream Video SDK  
  - Smooth group communication  

* 💬 **Live Chat**  
  - Real-time messaging using Stream Chat  

* 💻 **Online Code Editor**  
  - Monaco Editor integration  
  - Multi-language execution using Judge0 API  

* 👥 **Group Interview Rooms**  
  - Multiple users can join simultaneously  

* ⚡ **Modern UI**  
  - Tailwind CSS + DaisyUI  
  - Responsive design  

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)  
* Tailwind CSS + DaisyUI  
* React Query (TanStack)  
* Monaco Editor  
* Stream Video & Chat SDK  
* Clerk React SDK  

### Backend

* Node.js  
* Express.js  
* MongoDB (Mongoose)  
* Clerk Backend SDK  
* Stream Node SDK  

### APIs & Services

* Clerk → Authentication  
* Stream → Video Calls & Chat  
* Judge0 → Code Execution  

---


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
