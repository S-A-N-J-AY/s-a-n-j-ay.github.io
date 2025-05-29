import React from 'react';

const techStack = {
  'Frontend': ['HTML', 'CSS', 'JavaScript', 'React'],
  'Backend': ['Node.js'],
  'Tools & DB': ['Firebase', 'Git', 'GitHub'],
  'Styling': ['Tailwind CSS']
};

export default function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="py-16 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Tools & Tech Stack</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
