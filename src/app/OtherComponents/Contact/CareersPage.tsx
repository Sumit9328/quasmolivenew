"use client";
import { useState } from "react";

export default function CareersPage() {
  const jobs = [
    { title: "Full Stack Developer" },
    { title: "React Developer" },
    { title: "Flutter Developer" },
    { title: "Php Developer" },
    { title: "Mern Stack Developer" },
  ];

  const tags = ["Mid-Level", "Chennai", "Madurai"];

  return (
    <div className="w-full min-h-screen bg-white flex justify-center px-6 md:px-16 py-30">
      {/* MAIN CENTERED WRAPPER */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10">

        {/* LEFT JOB LIST */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-xl p-5 shadow hover:shadow-md transition-all cursor-pointer"
            >
              <h2 className="text-lg font-semibold mb-3">{job.title}</h2>

              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#eef2ff] text-[#4f46e5] px-3 py-[4px] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Primary Responsibility: Designing and implementing user interfaces
                using HTML, CSS, and JavaScript frameworks like React or Angular.
                Building and maintaining server-side application logic, databases…
              </p>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button className="px-3 py-1 border rounded-md text-sm">1</button>
            <button className="px-3 py-1 border rounded-md text-sm">2</button>
            <button className="px-3 py-1 border rounded-md text-sm">3</button>
            <button className="px-5 py-1 border rounded-md text-sm">Next &gt;</button>
          </div>
        </div>

        {/* RIGHT SIDE — FULL DESCRIPTION */}
        <div>
          <h1 className="text-2xl font-semibold mb-3">Full Stack Developer</h1>

          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-[#eef2ff] text-[#4f46e5] px-3 py-[4px] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* RESPONSIBILITIES */}
          <div className="text-sm text-gray-700 leading-relaxed mb-18">
            <h2 className="font-semibold mb-1">Primary Responsibility:</h2>
            Designing and implementing user interfaces using HTML, CSS, and
            JavaScript frameworks like React or Angular. Building and maintaining
            server-side application logic, databases, and APIs using technologies
            such as Node.js, Python, Ruby, or Java. Designing, implementing, and
            managing databases (SQL or NoSQL). Using version control systems like
            Git to manage code changes and collaborate with other developers.
            Implementing security best practices and automating deployment using
            CI/CD pipelines. Working with cross-functional teams to deliver
            high-quality software.
          </div>

          {/* JOB SPECIFICATION */}
          <div className="text-sm text-gray-700 leading-relaxed mb-18">
            <h2 className="font-semibold mb-3">Job Specification:</h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Proficiency in HTML, CSS, JavaScript, React or Angular</li>
              <li>Backend proficiency in NodeJS, Python, Ruby, Java</li>
              <li>Experience with SQL & NoSQL databases</li>
              <li>Schema design & query optimization</li>
              <li>Strong Git knowledge</li>
              <li>Web security best practices</li>
              <li>Performance optimization</li>
              <li>Good team collaboration</li>
              <li>Ability to communicate to non-technical stakeholders</li>
            </ul>
          </div>

          {/* DETAILS */}
          <div className="text-sm text-gray-700 leading-relaxed space-y-2">
            <p><strong>Employment Type:</strong> Full-time</p>
            <p><strong>Work place Type:</strong> Hybrid</p>
            <p><strong>Salary:</strong> Commensurate with experience and skills</p>
            <p><strong>Experience Required:</strong> Minimum 3 Years</p>
            <p><strong>Job Location:</strong> Chennai, Madurai, Coimbatore</p>
          </div>

          <button className="mt-6 bg-[#4f46e5] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#4338ca] transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
