import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Hero.css';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Suneth Narada</span>
            </h1>
            <h2 className="hero-subtitle">
              MERN Stack Development , Vediography & Editing
            </h2>
            <p className="hero-description">
             Full-stack MERN developer with a passion for
              vediography & editing — blending technology
               and creativity into powerful digital solutions.
            </p>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="image-container">
            <div className="profile-image">
              <div className="image-placeholder">
               
                <img
                src="/suneth.png"  
                alt="Suneth Narada"
                className="profile-thumb"
              />


              </div>
            </div>
            <div className="tech-icons">
              <div className="tech-icon react">React</div>
              <div className="tech-icon node">Node.js</div>
              <div className="tech-icon js">JavaScript</div>
              <div className="tech-icon css">Python</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;