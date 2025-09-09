import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'CSS/SCSS', level: 90, category: 'Frontend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 90, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'TypeScript', level: 82, category: 'Frontend' },
    { name: 'Python', level: 78, category: 'Backend' },
    { name: 'JAVA', level: 80, category: 'Backend' },
    { name: 'AWS', level: 72, category: 'Cloud' },
    { name: 'Oracle', level: 61, category: 'Cloud' },
    { name: 'Adobe Premiere Pro', level: 85, category: 'Video Editing' },
    { name: 'Adobe After Effects - Motion graphics software', level: 59, category: 'Video Editing' },
];

  const categories = [...new Set(skills.map(skill => skill.category))];

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-grid">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                className="skill-category-section"
                variants={itemVariants}
              >
                <h3 className="category-title">{category}</h3>
                <div className="skills-list">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        variants={itemVariants}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            variants={progressVariants}
                            custom={skill.level}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="additional-skills" variants={itemVariants}>
            <h3>Additional Expertise</h3>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 12h3"/>
                    <path d="M8 12H5"/>
                  </svg>
                </div>
                <h4>Agile Methodology</h4>
                <p>Experienced in Scrum and Kanban workflows</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                  </svg>
                </div>
                <h4>UI/UX Design</h4>
                <p>Creating intuitive and user-friendly interfaces</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                  </svg>
                </div>
                <h4>Performance Optimization</h4>
                <p>Optimizing applications for speed and efficiency</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                    <path d="M9 14l2 2 4-4"/>
                  </svg>
                </div>
                <h4>Testing & QA</h4>
                <p>Unit testing, integration testing, and TDD practices</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;