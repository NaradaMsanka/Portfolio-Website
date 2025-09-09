import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
   
    {
      id: 1,
      title: 'AUBOWAN HAMBANTOTA',
      description: 'A responsive safari trip planner that helps travelers discover destinations in Hambantota, navigate easily with Google Maps integration, and manage trips seamlessly with connected location services',
      image: '/safari-location.png',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      category: 'frontend',
      demoUrl: 'https://www.linkedin.com/posts/suneth-narada-madushanka-93a2b230a_webdevelopment-html-css-activity-7259256975887060993-xNVg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE61xb4By6x9ZshRR2nJIMCXAbAd9lDluBA',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 2,
      title: 'Video Editing Demo',
      description: 'A cinematic vediography project that uses advanced technical shooting techniques and creative storytelling, brought to life through professional editing with Adobe Premiere Pro and After Effects.',
      image: '/v-edit.png',
      technologies: ['Node.js', 'Express', 'JWT', 'Swagger'],
      category: 'backend',
      demoUrl: 'https://youtu.be/L8XuvNa747Q?si=5LSptthaI-LmRTv6',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and animated with Framer Motion, showcasing creative design and smooth interactions.',
      image: '/port-p.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Node.js'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/E-com.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
   
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <motion.div className="project-filters" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-thumb" />
                  <div className="project-overlay">
                    <div className="project-actions">

        
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a href={project.demoUrl} className="action-btn demo-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                      <a href={project.githubUrl} className="action-btn github-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;