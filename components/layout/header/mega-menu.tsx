"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuItem {
  label: string;
  href: string;
  badge?: string;
}

interface MegaMenuProps {
  title: string;
  items: MegaMenuItem[];
  mainHref?: string;
  accentColor?: "red" | "green";
}

export function MegaMenu({ title, items, mainHref, accentColor = "red" }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const accentColorClass = accentColor === "green" ? "fb-green" : "fb-red";

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button 
        className={`flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide hover:text-fb-red transition-colors py-2 border-b-2 border-transparent hover:border-fb-red`}
      >
        {title}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 mt-1 w-72 bg-card backdrop-blur-md border-l-4 border-fb-red shadow-2xl rounded-none`}
          >
            <div className="p-1">
              {mainHref && (
                <>
                  <a
                    href={mainHref}
                    className={`block px-4 py-3 font-mono text-sm font-bold text-fb-red hover:bg-accent transition-colors border-l-2 border-transparent hover:border-fb-red`}
                  >
                    → OVERVIEW
                  </a>
                  <div className="border-t border-border my-1" />
                </>
              )}
              {items.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-l-2 border-transparent hover:border-fb-red flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-xs font-mono px-2 py-0.5 bg-fb-red/20 text-fb-red border border-fb-red/40 rounded-none`}>
                      {item.badge}
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
