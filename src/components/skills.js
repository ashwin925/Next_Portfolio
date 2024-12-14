"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from '@/components/ui/navbar';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPython,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const skills = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiGit, name: "Git" },
  { icon: SiDocker, name: "Docker" },
  { icon: FaAws, name: "AWS" },
  { icon: SiPython, name: "Python" },
];
export default function Skills() {
  const [activeHexagons, setActiveHexagons] = useState([]);

  useEffect(() => {
    const activationDelay = 200;
    const timers = [];

    skills.forEach((_, index) => {
      const timer = setTimeout(() => {
        setActiveHexagons(prev => [...prev, index]);
      }, index * activationDelay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="skills-container">
      <LampContainer>
      <div className='mt-[-115px] absolute'>
      <Navbar />
      </div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="skills-title"
        >
          <span className="skillz">SKILLS</span>
        </motion.h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillHexagon
              key={skill.name}
              skill={skill}
              isActive={activeHexagons.includes(index)}
            />
          ))}
        </div>
      </LampContainer>
    </div>
  );
}


function SkillHexagon({ skill, isActive }) {
  return (
    <motion.div
      className={`skill-hexagon ${isActive ? 'active' : ''}`}
      animate={{
        y: isActive ? -4 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="hexagon-container">
        <div className="hexagon-shape">
          <div className={`hexagon-inner ${isActive ? 'active-hexagon' : ''}`} />
        </div>
        <skill.icon className={`skill-icon ${isActive ? 'active-icon' : ''}`} />
      </div>
      <span className={`skill-name ${isActive ? 'active-name' : ''}`}>
        {skill.name}
      </span>
    </motion.div>
  );
}

function LampContainer({ children }) {
  return (
    <div className="lamp-container">
      <div className="lamp-effect">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="lamp-glow lamp-glow-1"
        />
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="lamp-glow lamp-glow-2"
        />
        <div className="lamp-overlay" />
      </div>
      <div className="lamp-content">
        {children}
      </div>
    </div>
  );
}

