"use client";
import { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const generateQRCode = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(inputText);
      setQrCodeDataUrl(dataUrl);
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content">
      <h1 className="text-3xl font-bold mb-8">QR Code Generator</h1>

      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to generate QR Code"
        className="input input-bordered w-full max-w-xs mb-4"
      />
      <button
        onClick={generateQRCode}
        className="btn btn-primary"
      >
        Generate QR Code
      </button>

      {qrCodeDataUrl && (
        <div className="mt-6">
          <img src={qrCodeDataUrl} alt="Generated QR Code" className="shadow-lg rounded-lg" />
        </div>
      )}
    </div>
  );
}
