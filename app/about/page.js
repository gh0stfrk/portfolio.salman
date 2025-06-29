"use client";
import React, { use } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 w-full px-4 py-10 flex flex-col items-center">
        {/* Profile & Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-8 w-full max-w-4xl mb-10">
          <img
            src="/salman.jpg"
            alt="Salman Sayyed"
            className="w-28 h-28 rounded-full shadow-lg border-4 border-black/10 dark:border-white/10 object-cover"
          />
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white font-custom mb-1 text-center sm:text-left">
              Salman Sayyed
            </h1>
            <p className="text-lg sm:text-xl text-blue-700 dark:text-blue-400 font-semibold text-center sm:text-left">
              Software Engineer
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a
                href="mailto:salman@salmansyyd.com"
                className="text-blue-600 dark:text-blue-400 hover:underline break-all font-medium"
              >
                salman@salmansyyd.com
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">About</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
            <p>
              I'm Salman, a software engineer focused on building scalable cloud systems and modern web applications.
            </p>
            <p>
              I work primarily with AWS, JavaScript, and DevOps tools to design reliable infrastructures and streamline development workflows. My experience spans backend automation, ETL pipelines, and full-stack development.
            </p>
            <p>
              I enjoy working across teams, writing clean and maintainable code, and solving real-world technical problems with practical solutions.
            </p>
            <p>
              Based in Mumbai, India — open to opportunities, collaborations, and meaningful work in cloud and engineering domains.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Experience</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
              <img
                src="https://www.travelex.co.in/media/7073/travelex-logo-old.svg"
                alt="Travelex Logo"
                className="w-32 h-16 object-contain dark:bg-gray-800 self-start"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/company-logo.png";
                }}
              />
              <div className="flex-1 w-full">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                  Software Developer – Travelex
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sept 2024 – Present</p>
                <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-base">
                  <li>Develop and maintain ETL processes powering financial data pipelines to Oracle General Ledger systems.</li>
                  <li>Work on an AWS Lambda-based Enterprise Integration Framework (EIF) to schedule, process, and deliver large volumes of financial data.</li>
                  <li>Design and implement data transformation jobs that process input files and generate output formats for downstream systems.</li>
                  <li>Collaborate with cross-functional teams including testing and requirements to ensure reliable data workflows.</li>
                  <li>Contribute to framework enhancements and handle unexpected integration requirements and edge cases.</li>
                  <li>Tech stack includes JavaScript, Python, AWS SDK, CircleCI, GitHub, JIRA, MSSQL, DynamoDB, and JSON.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Education */}
        <section className="w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Education</h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">University of Mumbai • 2020 – 2023</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-base">
                <li>Graduated with First Class Honors, CGPA: 9.45</li>
                <li>Focused on system design, web development, cloud computing, and data structures</li>
                <li>Completed capstone projects using Flask and PostgreSQL, laying the foundation for backend development</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}