import React from 'react';

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="text-center py-20 px-4 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white dark:from-[#0f172a] dark:to-black"
      >
        <h1
          data-aos="zoom-in"
          className="text-4xl font-bold mb-4 text-white"
        >
          Sanjay Kumar Yerolla
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
           className="text-xl mb-4 text-gray-300 dark:text-gray-400">
              
          Front-End Developer | React Enthusiast
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-xl mx-auto text-gray-300"
        >
          I'm a Computer Science graduate passionate about creating beautiful and functional web experiences. I love working with React and modern web tools to build responsive, user-friendly applications.
        </p>

        <a
          href="/Sanjay-Yerolla-CV.docx"
          download
          data-aos="fade-up"
          data-aos-delay="300"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Download CV
        </a>
      </section>

      <div className="h-4 bg-gradient-to-b from-[#0f172a] to-[#f8fafc]"></div>
    </>
  );
}
