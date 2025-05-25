'use client';
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { motion } from 'framer-motion';
import Navbar from '@/component/Navbar';



export default function Home() {
  const [inputText, setInputText] = useState('');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');

  const generateQRCode = async () => {
    if (!inputText.trim()) return alert('Please enter text or URL');
    try {
      const url = await QRCode.toDataURL(inputText);
      setQrCodeDataUrl(url);
    } catch (err) {
      console.error('QR Code generation failed', err);
    }
  };

  

  return (
    <div className="min-h-screen bg-base-200 text-base-content flex flex-col">
      <Navbar/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Generate Beautiful QR Codes Instantly
        </h1>
        <p className="text-base-content/70 mt-4 text-lg max-w-xl mx-auto">
          Enter any text or link and turn it into a scannable QR code — simple,
          sleek, and fast.
        </p>
      </motion.div>

      <div className="flex justify-center mt-10 px-4">
        <motion.div
          className="card w-full max-w-xl bg-base-100 shadow-2xl p-6 backdrop-blur-sm bg-opacity-70 border border-base-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Enter your URL or text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="input input-bordered w-full mb-4"
          />

          <button onClick={generateQRCode} className="btn btn-primary w-full">
            Generate
          </button>

          {qrCodeDataUrl && (
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src={qrCodeDataUrl}
                alt="Generated QR Code"
                className="rounded-lg border shadow-lg max-w-[200px]"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      

      <footer className="mt-auto footer footer-center p-4 text-sm text-base-content/70">
        <p>© {new Date().getFullYear()} QR Studio — Built with DaisyUI & Framer Motion</p>
      </footer>
    </div>
  );
}
