import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
   <button
  onClick={() => setDarkMode(!darkMode)}
  className="fixed bottom-6 left-6 p-3 text-xl rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg transition z-50"
  aria-label="Toggle Dark Mode"
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>
  );
}
