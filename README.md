# 🚫 Safe Stream

**Safe Stream** is an automated NSFW video checker that uses deep learning to detect and flag inappropriate content in videos. Simply upload a video, and it returns timestamps where NSFW content is detected.

---

## 🔍 About

Safe Stream leverages a pre-trained Falcon NSFW image classification model combined with video frame extraction using OpenCV to identify unsafe segments in videos.

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Backend:** FastAPI  
- **Model:** Falcon NSFW Image Classifier  
- **Video Processing:** OpenCV, PyTorch

---

## 📦 How to Run Locally

### 🔙 Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Create a virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Start the backend server:

```bash
uvicorn main:app --reload
```

Backend will be running at: [http://localhost:8000](http://localhost:8000)

---

### 🔜 Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

Frontend will be available at: [http://localhost:3000](http://localhost:3000)

---

## 📤 Usage

1. Start both the backend and frontend servers.
2. Open the web app in your browser at `http://localhost:3000`.
3. Upload any `.mp4` or compatible video file.
4. The app will analyze the video and return a list of timestamps where NSFW content is detected.

---

## 💡 How the Frontend Works

- The React frontend provides a clean and responsive UI with a file upload form.
- When a video is uploaded, the file is sent to the backend via a `POST` request to the `/upload/` endpoint using `axios`.
- While the backend processes the video, a loading or "Pending" status is shown.
- After processing, the backend returns a list of detected NSFW timestamps.
- These timestamps are displayed dynamically in the UI in readable time format (e.g., `00:01:24`).
- If no NSFW content is detected, the app shows a message indicating the video is safe.

---

## 📁 Project Structure

```
nsfw-checker/
│
├── backend/
│   ├── main.py
│   ├── model/
│   └── utils/
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   └── components/
│   └── public/
│
├── README.md
└── requirements.txt
```

---

## 🧠 Model Info

- Falcon NSFW classifier is used to detect NSFW content in frames.
- Videos are split into frames using OpenCV (e.g., 1 frame per second).
- Each frame is classified individually using a PyTorch model.
- Timestamps of frames that exceed the NSFW confidence threshold (e.g., 0.8) are returned.

---

## ⚠️ Disclaimer

This tool is for educational and moderation purposes only. Accuracy may vary depending on video quality, lighting, and other factors. Always review flagged content manually before taking any action.
