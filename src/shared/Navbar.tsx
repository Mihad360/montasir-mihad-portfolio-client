"use client";
import profileImg from "../../public/IMG_20250524_165515.jpg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-[calc(100%-16px)] sm:w-[calc(100%-32px)] max-w-5xl z-50 rounded-xl sm:rounded-2xl 
  transition-all duration-500 
  ${
    scrolled
      ? "bg-background/90 backdrop-blur-xl border border-white/20 shadow-lg sm:shadow-2xl shadow-primary/10 top-2 sm:top-3"
      : "bg-transparent border border-transparent backdrop-blur-none shadow-none top-1"
  }
  left-1/2 -translate-x-1/2`} // Changed positioning
    >
      {/* Beams effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-20 pointer-events-none"></div>
      </div>

      <div className="px-4 sm:px-6 py-2 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo with name and title */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="group-hover:from-primary/30 group-hover:to-purple-500/30"
              >
                <Image
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  src={profileImg}
                  alt="profile"
                  width={50}
                  height={50}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold font-mono text-[#06B6D4]">
                  Mihad
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] text-muted-foreground font-mono mt-[-2px] ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  Full Stack Developer
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-1 relative z-0">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="relative px-3 py-1.5 group rounded-lg transition-colors"
    >
      <span
        className={`relative z-10 text-lg font-medium transition-colors ${
          pathname === item.href
            ? `${
                theme === "dark"
                  ? "text-white font-bold"
                  : "text-black font-bold"
              }`
            : `${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`
        }`}
      >
        {item.name}
      </span>

      {/* Active route background */}
      {pathname === item.href && (
        <motion.div
          layoutId="activeTab" // shared layoutId ONLY for active tab
          className="absolute inset-0 rounded-lg -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}

      {/* Inactive hover background (independent per item) */}
      {pathname !== item.href && (
        <motion.div
          className={`absolute inset-0 rounded-lg -z-10 ${
            theme === "dark"
              ? "group-hover:bg-white/10"
              : "group-hover:bg-black/5"
          }`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  ))}
</div>


          {/* Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Social Links - Hidden on mobile, shown on tablet */}
            <div className="hidden sm:flex space-x-1">
              <a
                href="https://github.com/Mihad360"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full hover:bg-foreground/5"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/montasir-mihad/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-full hover:bg-foreground/5"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:ahmedmihad962@gmail.com"
                className="p-1.5 sm:p-2 rounded-full hover:bg-foreground/5"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 sm:p-2 rounded-full hover:bg-foreground/5 cursor-pointer"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-4 w-4 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-4 w-4 text-indigo-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-1.5 sm:p-2 rounded-full hover:bg-foreground/5"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Fixed background visibility */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden mt-3 pt-3 border-t ${
                theme === "dark"
                  ? "border-white/10 bg-gray-900/95"
                  : "border-gray-200 bg-white/95"
              } rounded-b-xl backdrop-blur-lg`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? `${
                          theme === "dark"
                            ? "text-white bg-[#06B6D4]"
                            : "text-white bg-[#06B6D4]"
                        }`
                      : `${
                          theme === "dark"
                            ? "text-gray-300 hover:text-white hover:bg-white/10"
                            : "text-gray-700 hover:text-gray-900 hover:bg-black/5"
                        }`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div
                className={`flex items-center space-x-2 mt-2 px-3 py-2.5 mx-2 ${
                  theme === "dark" ? "border-white/10" : "border-gray-200"
                }`}
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-foreground/5"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-foreground/5"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:example@example.com"
                  className="p-1.5 rounded-full hover:bg-foreground/5"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
