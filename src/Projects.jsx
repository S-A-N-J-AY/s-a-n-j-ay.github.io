import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Budget Buddy App',
    description:
      'A smart budgeting Android app built using Kotlin, Firebase, and Jetpack Compose.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    github: 'https://github.com/s-a-n-j-ay/BudgetBuddy',
    type: ['Mobile', 'Backend', 'Database'],
  },
  {
    title: 'E-Commerce Website',
    description:
      'A site for buying, selling, and repairing vintage musical instruments.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/s-a-n-j-ay/ecommerce-app',
    type: ['Frontend'],
  },
  {
    title: 'Calculator App',
    description:
      'Advanced calculator using React and Node.js with a personalized interface.',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/s-a-n-j-ay/calculator-app',
    type: ['Frontend', 'Backend'],
  },
  {
    title: 'Portfolio Website',
    description:
      'This personal website built with React and Tailwind CSS to showcase my projects.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/s-a-n-j-ay/portfolio',
    type: ['Frontend', 'Tool'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{project.description}</p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm dark:bg-blue-200 dark:text-blue-900"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Type tags (Frontend, Backend, etc.) */}
            {project.type && (
              <div className="flex flex-wrap gap-2 mb-2">
                {project.type.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      tag === 'Frontend'
                        ? 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900'
                        : tag === 'Backend'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900'
                        : tag === 'Database'
                        ? 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900'
                        : tag === 'Tool'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900'
                        : tag === 'Mobile'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-300 dark:text-gray-900'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* GitHub link */}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
