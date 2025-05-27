import React, { useEffect, useState } from "react";
import { Sun, Moon, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "./profile-placeholder.jpg";


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Styles for dark and light mode containers
  const containerStyle = {
    minHeight: "100vh",
    padding: "24px",
    color: darkMode ? "white" : "black",
    background: darkMode
      ? "linear-gradient(to bottom right, #1a202c, #000000)"
      : "linear-gradient(to bottom right, #e0e7ff, #ffffff)",
    transition: "background 0.7s, color 0.7s",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    letterSpacing: "-0.025em",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: darkMode ? "#d1d5db" : "#4b5563", // gray-300 / gray-700
    padding: "8px",
  };

  const heroSectionStyle = {
    textAlign: "center",
    paddingTop: "64px",
    paddingBottom: "64px",
  };

  const profileImageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    border: "4px solid #6366f1", // indigo-500
    marginBottom: "24px",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
  };

  const heroHeadingStyle = {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "16px",
    background:
      "linear-gradient(90deg, #4f46e5, #8b5cf6, #ec4899)", // indigo to purple to pink
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const heroTextStyle = {
    fontSize: "1.125rem",
    maxWidth: "640px",
    margin: "0 auto",
    color: darkMode ? "#d1d5db" : "#000000", // gray-300 or black
  };

  const sectionCardStyle = {
    maxWidth: "768px",
    margin: "48px auto",
    padding: "32px",
    borderRadius: "1rem",
    boxShadow: darkMode
      ? "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
      : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
    backgroundColor: darkMode ? "#1f2937" : "white", // gray-800 or white
    color: darkMode ? "white" : "black",
    transition: "background-color 0.5s, color 0.5s",
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "16px",
  };

  const projectsSectionStyle = {
    maxWidth: "960px",
    margin: "48px auto",
  };

  const projectsGridStyle = {
    display: "grid",
    gap: "32px",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  };

  const cardStyle = {
    borderRadius: "0.5rem",
    boxShadow: darkMode
      ? "0 10px 15px rgba(0,0,0,0.7)"
      : "0 10px 15px rgba(0,0,0,0.1)",
    backgroundColor: darkMode ? "#1f2937" : "white",
    color: darkMode ? "white" : "black",
    padding: "20px",
    transition: "background-color 0.5s, color 0.5s",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
  };

  const cardDescriptionStyle = {
    fontSize: "0.875rem",
    marginTop: "8px",
  };

  const projectLinkStyle = {
    marginTop: "12px",
    display: "inline-block",
    textDecoration: "underline",
    color: darkMode ? "#60a5fa" : "#2563eb", // blue-400 / blue-600
    cursor: "pointer",
  };

  const skillsSectionStyle = {
    maxWidth: "768px",
    margin: "64px auto",
    textAlign: "center",
  };

  const skillsTitleStyle = {
    fontSize: "1.875rem",
    fontWeight: "600",
    marginBottom: "24px",
  };

  const skillsWrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  };

  const skillBadgeStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "default",
    userSelect: "none",
  };

  const darkSkillBadge = {
    backgroundColor: "#4338ca", // indigo-800
    color: "#e0e7ff", // indigo-100
  };

  const lightSkillBadge = {
    backgroundColor: "#e0e7ff", // indigo-100
    color: "#4338ca", // indigo-800
  };

  const contactSectionStyle = {
    maxWidth: "576px",
    margin: "48px auto",
    textAlign: "center",
  };

  const contactTitleStyle = {
    fontSize: "1.875rem",
    fontWeight: "600",
    marginBottom: "16px",
  };

  const contactTextStyle = {
    marginBottom: "24px",
    color: darkMode ? "#d1d5db" : "#4b5563", // gray-300 / gray-700
  };

  const contactLinksWrapper = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "24px",
  };

  const contactLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: darkMode ? "white" : "black",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: "500",
  };

  const contactLinkHoverColor = "#6366f1"; // indigo-600

  const resumeButtonStyle = {
    backgroundColor: "#4f46e5", // indigo-600
    color: "white",
    padding: "12px 24px",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  };

  const footerStyle = {
    marginTop: "64px",
    textAlign: "center",
    fontSize: "0.875rem",
    color: darkMode ? "#9ca3af" : "#6b7280", // gray-400 / gray-500
  };

  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
  ];

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <motion.h1
          style={titleStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pratik Pardhi
        </motion.h1>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle Theme"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.color = darkMode ? "#fbbf24" : "#a855f7")} // hover effect (amber-400 / purple-500)
          onMouseOut={(e) => (e.currentTarget.style.color = darkMode ? "#d1d5db" : "#4b5563")}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </header>

      {/* Hero Section */}
      <motion.section
        style={heroSectionStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div>
          <img
            src={profileImage}
            alt="Profile"
            style={profileImageStyle}
            loading="lazy"
          />
        </div>
        <h2 style={heroHeadingStyle}>Hey! I&apos;m Pratik Pardhi</h2>
        <p style={heroTextStyle}>
          I am a frontend developer passionate about building beautiful,
          performant websites and apps.
        </p>
      </motion.section>

      {/* About Me */}
      <section style={sectionCardStyle}>
        <h3 style={sectionTitleStyle}>About Me</h3>
        <p>
          I specialize in React.js, Node.js, and modern web technologies to
          craft seamless user experiences. When I&apos;m not coding, I enjoy
          hiking and photography.
        </p>
      </section>

      {/* Projects */}
      <section style={projectsSectionStyle}>
        <h3 style={{ ...sectionTitleStyle, textAlign: "center" }}>Projects</h3>
        <div style={projectsGridStyle}>
          <motion.article
            style={cardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 style={cardTitleStyle}>Portfolio Website</h4>
            <p style={cardDescriptionStyle}>
              A personal website built with React, Tailwind CSS, and Framer
              Motion.
            </p>
            <a
              href="https://github.com/Pratik Pardhi/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={projectLinkStyle}
            >
              View on GitHub
            </a>
          </motion.article>

          <motion.article
            style={cardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h4 style={cardTitleStyle}>Weather App</h4>
            <p style={cardDescriptionStyle}>
              A weather forecasting app using OpenWeather API and React.
            </p>
            <a
              href="https://github.com/Pratik Pardhi/weather-app"
              target="_blank"
              rel="noopener noreferrer"
              style={projectLinkStyle}
            >
              View on GitHub
            </a>
          </motion.article>

          {/* Add more projects here */}
        </div>
      </section>

      {/* Skills */}
      <section style={skillsSectionStyle}>
        <h3 style={skillsTitleStyle}>Skills</h3>
        <div style={skillsWrapperStyle}>
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              style={{
                ...skillBadgeStyle,
                ...(darkMode ? darkSkillBadge : lightSkillBadge),
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={24}
                height={24}
                loading="lazy"
                style={{ display: "inline-block" }}
              />
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={contactSectionStyle}>
        <h3 style={contactTitleStyle}>Contact Me</h3>
        <p style={contactTextStyle}>
          Feel free to reach out to me on these platforms:
        </p>
        <div style={contactLinksWrapper}>
          <a
            href="mailto:pardhipratik52@gmail.com"
            style={contactLinkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = contactLinkHoverColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = darkMode ? "white" : "black")}
          >
            <Mail />
            Email
          </a>
          <a
            href="https://github.com/PratikPardhi04"
            target="_blank"
            rel="noopener noreferrer"
            style={contactLinkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = contactLinkHoverColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = darkMode ? "white" : "black")}
          >
            <Github />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-pardhi-99620232a/"
            target="_blank"
            rel="noopener noreferrer"
            style={contactLinkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = contactLinkHoverColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = darkMode ? "white" : "black")}
          >
            <Linkedin />
            LinkedIn
          </a>
        </div>
        <button
          style={resumeButtonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4338ca")} // indigo-800
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")} // indigo-600
          onClick={() =>
            window.open("/rohan-sharma-resume.pdf", "_blank", "noopener noreferrer")
          }
        >
          View Resume
        </button>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        © {new Date().getFullYear()} Pratik Pardhi. All rights reserved.
      </footer>
    </div>
  );
}
// Note: Ensure you have the necessary assets (like profile image and resume PDF) in the public folder.