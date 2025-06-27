"use client";

import { useState } from "react";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded"
    >
      {darkMode ? "🌑" : "☀"}
    </button>
  );
};

export default ThemeToggler;
