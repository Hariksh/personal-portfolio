import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaCode, FaTools, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';

const Resume = () => {
  const printResume = () => {
    window.print();
  };

  return (
    <div
      className="resume-page"
      style={{
        paddingTop: "80px",
        paddingBottom: "60px",
        background: "var(--bg-primary)",
      }}
    >
      <section
        className="resume-hero"
        style={{
          background: "var(--bg-secondary)",
          color: "var(--text-primary)",
          textAlign: "center",
          padding: "80px 0 120px",
          marginBottom: "-80px",
          borderBottom: "1px solid var(--border-glass)",
        }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "48px",
              fontWeight: 700,
              marginBottom: "20px",
              fontFamily: "var(--font-heading)",
            }}
          >
            My Resume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto 30px",
              color: "var(--text-secondary)",
            }}
          >
            A comprehensive overview of my education, skills, and experience
            in computer science and web development.
          </motion.p>
          <motion.button
            onClick={printResume}
            className="download-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "inline-block",
              background: "transparent",
              color: "var(--accent-color)",
              padding: "12px 30px",
              borderRadius: "2px",
              textDecoration: "none",
              fontWeight: 600,
              border: "1px solid var(--accent-color)",
              cursor: "pointer",
              fontSize: "15px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent-color)";
              e.target.style.color = "var(--btn-text-color)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "var(--accent-color)";
            }}
          >
            📄 Download / Print PDF
          </motion.button>
        </div>
      </section>

      <section className="resume-content-wrapper">
        <div className="container">
          <motion.div
            className="resume-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              background: "#fff",
              color: "#333",
              borderRadius: "4px",
              boxShadow: "var(--shadow-medium)",
              overflow: "hidden",
              position: "relative",
              zIndex: 10,
            }}
          >
            <div
              className="resume-header"
              style={{
                background: "#1a1a1a",
                color: "white",
                padding: "40px",
                textAlign: "center",
                borderBottom: "4px solid #D4AF37",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Hariksh Mahendra Suryawanshi
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                  marginBottom: "15px",
                  fontSize: "14px",
                  color: "#ccc",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaPhone style={{ color: "#D4AF37" }} /> +91 9503635207
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaEnvelope style={{ color: "#D4AF37" }} />{" "}
                  hariksh.suryawanshi@adypu.edu.in
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                  fontSize: "14px",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/hariksh-suryawanshi-318a65314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaLinkedin style={{ color: "#D4AF37" }} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Hariksh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaGithub style={{ color: "#D4AF37" }} /> Github
                </a>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <SiCodechef style={{ color: "#D4AF37" }} /> CodeChef
                </a>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <SiCodeforces style={{ color: "#D4AF37" }} /> Codeforces
                </a>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <SiLeetcode style={{ color: "#D4AF37" }} /> Leetcode
                </a>
              </div>
            </div>

            <div
              className="resume-section"
              style={{ padding: "30px 40px", borderBottom: "1px solid #eee" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  color: "#1a1a1a",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "5px",
                  fontWeight: 700,
                }}
              >
                Professional Summary
              </h3>
              <p
                style={{
                  color: "#333",
                  lineHeight: 1.6,
                  fontSize: "14px",
                  textAlign: "justify",
                }}
              >
                Full-Stack Developer skilled in building end-to-end web and
                mobile applications using React, Next.js, Node.js, Express,
                MongoDB, MySQL, and Prisma. Experienced in designing scalable
                REST APIs, integrating authentication, and optimizing backend
                performance. Delivered production-ready features like
                real-time tracking, dashboards, analytics, and state
                management across multiple full-stack projects. Open-source
                contributor with 10+ merged PRs, strong understanding of clean
                architecture, and hands-on experience deploying applications
                on Render, Railway, and Vercel.
              </p>
            </div>

            {/* Education */}
            <div
              className="resume-section"
              style={{ padding: "20px 40px", borderBottom: "1px solid #eee" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "5px",
                  fontWeight: 700,
                }}
              >
                Education
              </h3>
              <div
                className="education-item"
                style={{ marginBottom: "15px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    Bachelor of Technology (AI ML)
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    2024 - 2028
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#444",
                  }}
                >
                  <span>Newton School of Technology (ADYPU), Pune</span>
                  <span>Grade: 8.11/10.0</span>
                </div>
              </div>
              <div
                className="education-item"
                style={{ marginBottom: "15px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    Intermediate (Class XII)
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    2023 - 2024
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#444",
                  }}
                >
                  <span>
                    Shri Pimpaladevi Madhyamic And Uchha Madhyamic Vidyalaya,
                    Dhule
                  </span>
                  <span>Grade: 82.17%</span>
                </div>
              </div>
              <div className="education-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    Matriculation (Class X)
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    2021 - 2022
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#444",
                  }}
                >
                  <span>Jai Hind High School, Dhule</span>
                  <span>Grade: 83.2%</span>
                </div>
              </div>
            </div>

            <div
              className="resume-section"
              style={{ padding: "20px 40px", borderBottom: "1px solid #eee" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "5px",
                  fontWeight: 700,
                }}
              >
                Projects
              </h3>

              <div className="project-item" style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    Ambulance Booking System ({" "}
                    <a
                      href="https://github.com/Hariksh/Ambulance_Booking"
                      style={{ color: "#0056b3" }}
                    >
                      Github
                    </a>{" "}
                    ) ({" "}
                    <a
                      href="https://ambulance-booking-sooty.vercel.app/"
                      style={{ color: "#0056b3" }}
                    >
                      Demo
                    </a>{" "}
                    )
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    October 2025
                  </span>
                </div>
                <ul
                  style={{
                    margin: "5px 0 0",
                    paddingLeft: "18px",
                    fontSize: "14px",
                    color: "#333",
                    lineHeight: "1.5",
                  }}
                >
                  <li>
                    Built an application{" "}
                    <strong>Ambulance Booking System</strong> covering
                    frontend (<strong>Next.js</strong>), backend APIs (
                    <strong>Node.js/Express</strong>), database (
                    <strong>MongoDB/Mongoose</strong>), real-time engine (
                    <strong>Socket.io</strong>), and deployed the complete
                    application on <strong>Render</strong>.
                  </li>
                  <li>
                    Developed the complete emergency workflow including{" "}
                    <strong>JWT-secured authentication</strong>, ambulance
                    request, driver assignment, <strong>live tracking</strong>
                    , trip status updates, and booking history for a seamless,
                    production-style experience.
                  </li>
                </ul>
              </div>

              <div className="project-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    Expense Tracker ({" "}
                    <a
                      href="https://github.com/Hariksh/Expense_tracker"
                      style={{ color: "#0056b3" }}
                    >
                      Github
                    </a>{" "}
                    ) ({" "}
                    <a href="#" style={{ color: "#0056b3" }}>
                      Demo
                    </a>{" "}
                    )
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    October 2025
                  </span>
                </div>
                <ul
                  style={{
                    margin: "5px 0 0",
                    paddingLeft: "18px",
                    fontSize: "14px",
                    color: "#333",
                    lineHeight: "1.5",
                  }}
                >
                  <li>
                    Built an{" "}
                    <strong>
                      end-to-end full-stack mobile Expense Tracker
                    </strong>{" "}
                    enabling secure <strong>JWT-based authentication</strong>,
                    expense CRUD, categorization, and detailed history inside
                    a clean, responsive UI built with{" "}
                    <strong>React Native (Expo)</strong>.
                  </li>
                  <li>
                    Designed and implemented a{" "}
                    <strong>RESTful backend</strong> using{" "}
                    <strong>Node.js, Express.js, MySQL</strong>, and{" "}
                    <strong>Prisma ORM</strong> with schema design,
                    migrations, and optimized queries to ensure persistent and
                    reliable user-specific data storage.
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div
              className="resume-section"
              style={{ padding: "20px 40px", borderBottom: "1px solid #eee" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  color: "#1a1a1a",
                  marginBottom: "15px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "5px",
                  fontWeight: 700,
                }}
              >
                Certifications
              </h3>
              <div
                className="certification-item"
                style={{ marginBottom: "10px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    Generative AI for Everyone{" "}
                    <span
                      style={{ fontWeight: "normal", fontStyle: "italic" }}
                    >
                      DeepLearning.AI BY Andrew Ng
                    </span>{" "}
                    ({" "}
                    <a href="#" style={{ color: "#0056b3" }}>
                      Link
                    </a>{" "}
                    )
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    February 2025
                  </span>
                </div>
                <ul
                  style={{
                    margin: "2px 0 0",
                    paddingLeft: "18px",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  <li>
                    Covered LLM fundamentals, prompt engineering, safety, and
                    real-world applications.
                  </li>
                </ul>
              </div>
              <div className="certification-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "2px",
                  }}
                >
                  <strong style={{ fontSize: "15px" }}>
                    AI for Everyone{" "}
                    <span
                      style={{ fontWeight: "normal", fontStyle: "italic" }}
                    >
                      DeepLearning.AI BY Andrew Ng
                    </span>{" "}
                    ({" "}
                    <a href="#" style={{ color: "#0056b3" }}>
                      Link
                    </a>{" "}
                    )
                  </strong>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    January 2025
                  </span>
                </div>
                <ul
                  style={{
                    margin: "2px 0 0",
                    paddingLeft: "18px",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  <li>
                    Learned AI use-cases, limitations, ethics, and societal
                    impact.
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div
              className="resume-section"
              style={{ padding: "20px 40px", borderBottom: "1px solid #eee" }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  color: "#1a1a1a",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "5px",
                  fontWeight: 700,
                }}
              >
                Skills
              </h3>
              <div
                style={{ fontSize: "14px", color: "#333", lineHeight: "1.6" }}
              >
                <div>
                  <strong>Computer Languages:</strong> JavaScript, CSS, HTML,
                  Python
                </div>
                <div>
                  <strong>Software Packages:</strong> MongoDB, MySQL, Node.js,
                  React, Prisma ORM, Tailwind CSS, React Native, Next JS,
                  Express JS
                </div>
                <div>
                  <strong>Soft Skills:</strong> Communication Skills,
                  Teamwork, Time management
                </div>
                <div>
                  <strong>Others:</strong> OAuth 2.0, Framer Motion, ESLint,
                  Problem-Solving, Postman, Git and Github
                </div>
              </div>
            </div>

            {/* Extra-Curricular Activities */}
            <div className="resume-section" style={{ padding: "20px 40px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  color: "#1a1a1a",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "2px solid #f0f0f0",
                  paddingBottom: "5px",
                  fontWeight: 700,
                }}
              >
                Extra-Curricular Activities
              </h3>
              <ul
                style={{
                  margin: "0",
                  paddingLeft: "18px",
                  fontSize: "14px",
                  color: "#333",
                  lineHeight: "1.5",
                }}
              >
                <li>
                  Built a{" "}
                  <strong>Dark Store Management System prototype</strong> in a
                  24-hour <strong>Blinkit Hackathon</strong>, implementing{" "}
                  <strong>inventory management</strong>, order routing, and
                  real-time dashboards.
                </li>
                <li>
                  Successfully completed <strong>Hacktoberfest</strong> with
                  10-15 accepted open-source contributions (UI issues, and
                  feature enhancements).
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
