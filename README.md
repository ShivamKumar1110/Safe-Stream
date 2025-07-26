# Safe Stream

🚫 NSFW Video Checker built with React + FastAPI + Deep Learning

## 🔍 About

Safe Stream is an automated NSFW video checker that detects inappropriate content using a deep learning model. Upload a video and it returns timestamps where NSFW content is detected.

## 🛠️ Tech Stack

- Frontend: React.js
- Backend: FastAPI
- Model: Falcon NSFW image classifier
- Video Processing: OpenCV, PyTorch

## 📦 How to Run

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
