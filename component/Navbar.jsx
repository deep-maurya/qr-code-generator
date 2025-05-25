"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const themes = [
  'light', 'dark'
]
const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
      <div className="navbar px-4 py-2 bg-base-100 shadow fixed top-0 z-50">
        <div className="flex-1 text-xl font-bold tracking-tight">QR Code</div>
        <div className="flex-none">
          <select
            className="select select-sm select-bordered"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
  )
}

export default Navbar