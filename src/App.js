import QRCode from "qrcode";
import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        Width: 800,
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrCode(url);
      }
    );
  };
  return (
    <div className="App">
      <div className="top">
        <input
          type="text"
          placeholder="input here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenerateQRCode}>Generate</button>
      </div>
      {qrCode && (
        <div className="bot">
          <img src={qrCode} alt="code" />
          <a href={qrCode} download="qrCode.png">
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
