import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate MERN Stack Developer and Videographer,
               dedicated to building impactful
               digital solutions and creating compelling visual content.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <p>I’m a dedicated full-stack 
                  developer with 1 year of experience
                  building web applications that merge
                  clean design with solid functionality. My journey began
                   with curiosity about coding, and has 
                  grown into a passion for creating 
                  solutions that truly add value.
                  
                </p>
                <p>
                  I specialize in the MERN stack 
                  (MongoDB, Express.js, React, Node.js) 
                  as well as Java with Spring Boot, giving me the flexibility to develop modern applications across different environments. I’m always eager to explore new technologies, solve real-world problems,
                   and improve my craft.
                </p>
                <p>
                  Outside of coding, I enjoy experimenting with creative fields like videography and editing, which inspire me to blend
                   technology with storytelling.
                </p>
                <div className="key-points">
                  <div className="point">
                    <span className="point-icon">🎯</span>
                    <span>Detail-oriented problem solver</span>
                  </div>
                  <div className="point">
                    <span className="point-icon">💻</span>
                    <span>Full-Stack MERN & Java Developer</span>
                  </div>
                  <div className="point">
                    <span className="point-icon">🤝</span>
                    <span>Strong team collaboration skills</span>
                  </div>
                   <div className="point">
                    <span className="point-icon">🎬</span>
                    <span>Videography & Editing Enthusiast</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-skills" variants={itemVariants}>
              <h3>What I Do</h3>
              <div className="skill-categories">
                <div className="skill-category">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h4>Frontend Development</h4>
                  <p>Creating responsive, interactive user interfaces with React, Vue.js, and modern CSS frameworks.</p>
                </div>

                <div className="skill-category">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <h4>Backend Development</h4>
                  <p>Building scalable APIs and server-side applications using Node.js, Express, and various databases (specialize for MongoDB).</p>
                </div>

                <div className="skill-category">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <h4>UI/UX Design & Videography + Editing</h4>
                  <p>Designing intuitive user experiences with a focus on
                     usability, accessibility, and modern design principles 
                     — while bringing stories
                     to life through creative vediography and editing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;