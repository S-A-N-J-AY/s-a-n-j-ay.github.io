import React from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Feel free to reach out or connect with me:</p>
      <p className="mb-1">
        <a href="mailto:yerollasanjaykumar@gmail.com" className="text-blue-600 underline">
          yerollasanjaykumar@gmail.com
        </a>
      </p>
      <p>
        <a href="https://github.com/s-a-n-j-ay" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          GitHub
        </a>
      </p>
      <p>
        <a href="https://linkedin.com/in/yerolla-sanjay" target="_blank" rel="noreferrer" className="text-blue-600 underline">
          LinkedIn
        </a>
      </p>

      {/* Toggle button with AOS */}
      <div className="flex justify-center mt-8" data-aos="fade-up">
        <DarkModeToggle />
      </div>
    </section>
  );
}
