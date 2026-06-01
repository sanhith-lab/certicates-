"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp, FileText } from "lucide-react";

const certifications = [
  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    date: "2023",
    category: "Cybersecurity",
    file: "/certificates/Junior Cybersecurity Analyst Career Path 2251.pdf",
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco",
    date: "2023",
    category: "Cybersecurity",
    file: "/certificates/Endpoint Security 2251.pdf",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    date: "2023",
    category: "Networking",
    file: "/certificates/Networking Basics 2251.pdf",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    date: "2023",
    category: "Data Analytics",
    file: "/certificates/Data Analytics Essentials 2251.pdf",
  },
  {
    title: "AI/ML Certificate",
    issuer: "Institution",
    date: "2023",
    category: "AI/ML",
    file: "/certificates/2251_AIML.pdf",
  },
  {
    title: "Generative AI",
    issuer: "Online Platform",
    date: "2024",
    category: "AI/ML",
    file: "/certificates/gen ai.pdf",
  },
  {
    title: "Java Basics",
    issuer: "HackerRank",
    date: "2023",
    category: "Programming",
    file: "/certificates/java_basic certificate.pdf",
  },
  {
    title: "Juniper Mist-AI",
    issuer: "Juniper Networks",
    date: "2023",
    category: "Networking",
    file: "/certificates/Juniper Mist-AI 2251.pdf",
  },
  {
    title: "Computer Networks",
    issuer: "Institution",
    date: "2023",
    category: "Networking",
    file: "/certificates/computer networks.pdf",
  },
  {
    title: "Operating Systems",
    issuer: "Institution",
    date: "2023",
    category: "Computer Science",
    file: "/certificates/Operating System.pdf",
  },
  {
    title: "Probability and Statistics",
    issuer: "Institution",
    date: "2023",
    category: "Mathematics",
    file: "/certificates/Probability and Statictics.pdf",
  },
  {
    title: "Coursera Certificate",
    issuer: "Coursera",
    date: "2023",
    category: "Professional Development",
    file: "/certificates/Coursera 8JER9YV3BTW5.pdf",
  },
];

const categories = ["All", ...new Set(certifications.map((c) => c.category))];

const categoryColors: Record<string, string> = {
  Cybersecurity: "primary",
  Networking: "secondary",
  "Data Analytics": "accent",
  "AI/ML": "primary",
  Programming: "secondary",
  "Computer Science": "accent",
  Mathematics: "primary",
  "Professional Development": "secondary",
};

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredCerts = activeCategory === "All" 
    ? certifications 
    : certifications.filter((c) => c.category === activeCategory);

  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section id="certifications" className="py-32 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm">04. Certifications</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-background"
                  : "bg-card/50 text-muted hover:text-foreground border border-border/50 hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCerts.map((cert, index) => {
            const colorClass = categoryColors[cert.category] || "primary";
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-lg bg-${colorClass}/10 border border-${colorClass}/20`}>
                      <Award className={`text-${colorClass}`} size={20} />
                    </div>
                    <ExternalLink size={16} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{cert.issuer}</span>
                    <span className="text-muted-foreground">{cert.date}</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium text-${colorClass}`}>
                      <FileText size={12} />
                      View Certificate
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredCerts.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 bg-card/50 text-muted hover:text-foreground hover:border-primary/50 transition-all"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Show More ({filteredCerts.length - 6} more) <ChevronDown size={18} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
