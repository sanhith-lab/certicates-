"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Shield, Brain, Database, Globe, Terminal } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    color: "primary",
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: "secondary",
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    color: "accent",
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    items: ["Network Security", "Endpoint Security", "Vulnerability Assessment"],
    color: "primary",
  },
  {
    category: "AI/ML",
    icon: Brain,
    items: ["Machine Learning", "Data Analytics", "Gen AI"],
    color: "secondary",
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "Docker", "Linux", "VS Code"],
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    glow: "group-hover:shadow-primary/20",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "group-hover:shadow-secondary/20",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-accent",
    glow: "group-hover:shadow-accent/20",
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Building the Future,{" "}
            <span className="gradient-text">Securely</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            I&apos;m a passionate developer with a keen interest in cybersecurity and AI/ML. 
            I believe in creating solutions that are not just functional, but also secure 
            and scalable. Currently pursuing my degree while actively building projects 
            and gaining industry experience.
          </p>
        </motion.div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const colors = colorClasses[skill.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-lg ${colors.glow}`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${colors.bg} ${colors.border} border mb-4`}>
                    <skill.icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg bg-border/30 text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: "Certifications", value: "15+" },
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "20+" },
            { label: "Years Learning", value: "3+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-border/50 bg-card/30 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", delay: 0.7 + index * 0.1 }}
                className="text-3xl sm:text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
