import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const response = await axios.post("https://safe-stream-backend.onrender.com/upload/", formData);

      setResults(response.data.results || []);
      setStatus(response.data.status || "");
      console.log("✅ Response:", response.data);
    } catch (error) {
      console.error("❌ Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>NSFW Video Checker</h1>
      <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {status && (
        <h2 style={{ color: status === "safe" ? "green" : "red" }}>
          Video Status: {status.toUpperCase()}
        </h2>
      )}

      {results.length > 0 && (
        <div>
          <h3>Flagged Time Frames</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                ⏱ {item.time}s — 🚩 {item.label} — 🔢 {item.confidence}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
