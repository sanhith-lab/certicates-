"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Tech Company",
    location: "India",
    period: "2024 - Present",
    description: "Working on full-stack web applications using modern technologies. Implementing secure coding practices and contributing to team projects.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    current: true,
  },
  {
    title: "Industrial Training",
    company: "Industry Partner",
    location: "India",
    period: "2023 - 2024",
    description: "Completed comprehensive industrial training program covering software development practices, project management, and industry workflows.",
    skills: ["Java", "Python", "Git", "Agile"],
    current: false,
  },
  {
    title: "Cybersecurity Analyst Trainee",
    company: "Cisco",
    location: "Online",
    period: "2023",
    description: "Completed Junior Cybersecurity Analyst Career Path. Gained expertise in network security, endpoint security, and threat analysis.",
    skills: ["Network Security", "Endpoint Security", "Threat Analysis"],
    current: false,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. Experience</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary md:-translate-x-1/2 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div
                  className={`p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } md:max-w-md`}
                >
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex items-center gap-4 text-sm text-muted mb-3 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
