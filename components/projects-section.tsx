"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder, Brain, Bot, LineChart, Truck, CreditCard } from "lucide-react";

// SVG icon for GitHub
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description: "Built a fraud detection model using Random Forest algorithm. Utilized NumPy, Pandas, and Scikit-learn for data processing and training. Achieved strong accuracy on real-world financial datasets.",
    tags: ["Python", "Random Forest", "Scikit-learn", "Pandas", "NumPy"],
    period: "Aug 2025 - Nov 2025",
    github: "https://github.com/sanhith-lab",
    icon: CreditCard,
    featured: true,
  },
  {
    title: "AI Trading Bot",
    description: "Developed an AI-based trading bot for stocks and cryptocurrencies. Implemented reinforcement learning models (DQN/PPO) to optimize trading decisions. Integrated real-time market APIs for live price tracking and execution.",
    tags: ["Python", "Reinforcement Learning", "DQN", "PPO", "APIs"],
    period: "Sep 2026 - Dec 2026",
    github: "https://github.com/sanhith-lab",
    icon: Bot,
    featured: true,
  },
  {
    title: "Stock Prediction System",
    description: "Built a system to predict optimal buy/sell timings for stocks using AI. Combined reinforcement learning with NLP-based sentiment analysis from financial news. Deployed using DevOps practices for continuous updates and monitoring.",
    tags: ["Reinforcement Learning", "NLP", "Sentiment Analysis", "DevOps"],
    period: "2026",
    github: "https://github.com/sanhith-lab",
    icon: LineChart,
    featured: true,
  },
  {
    title: "Brain Tumor Detection",
    description: "Created a CNN-based model for MRI image classification. Used TensorFlow/PyTorch for training and evaluation. Improved model performance using preprocessing and feature extraction techniques.",
    tags: ["Python", "CNN", "TensorFlow", "PyTorch", "Deep Learning"],
    period: "Feb 2025 - May 2025",
    github: "https://github.com/sanhith-lab",
    icon: Brain,
    featured: false,
  },
  {
    title: "Doorstep Medicine Delivery",
    description: "Developed an online platform for ordering medicines with doorstep delivery. Designed backend services and integrated APIs for order processing and tracking. Used DevOps tools for deployment, automation, and system reliability.",
    tags: ["Web Development", "Node.js", "REST APIs", "DevOps"],
    period: "2026",
    github: "https://github.com/sanhith-lab",
    icon: Truck,
    featured: false,
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and dark theme.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/sanhith-lab/certicates-",
    icon: Folder,
    featured: false,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">03. Projects</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Project Image Placeholder */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                  <div className="relative aspect-video rounded-xl bg-card border border-border/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon size={64} className="text-muted-foreground/30" />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GithubIcon size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <span className="text-primary font-mono text-sm">Featured Project</span>
                {project.period && (
                  <span className="text-muted font-mono text-xs ml-2">({project.period})</span>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 mb-4">
                  <p className="text-muted leading-relaxed">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-border/50 text-sm text-muted font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="text-primary" size={32} />
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                      >
                        <GithubIcon size={20} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
