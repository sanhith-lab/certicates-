"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by Sanhith Reddy</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Next.js</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Tailwind CSS</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Framer Motion</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-border/50 bg-card/50 text-muted hover:text-foreground hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Year */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sanhith Reddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
