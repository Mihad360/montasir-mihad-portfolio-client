"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import profileImg from "../../public/IMG_20250524_165515.jpg";
import { useTheme } from "next-themes";
import React from "react";

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents rendering until theme is ready

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className={`py-16 px-4 sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "text-gray-300"
          : "bg-gray-200 text-gray-700"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <Image
              className="w-12 h-12 rounded-full object-cover"
              src={profileImg}
              alt="profile"
              width={50}
              height={50}
            />
            <h3
              className={`text-lg font-semibold mb-3 mt-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Montasir Mihad
            </h3>
            <p className="text-sm">
              Full Stack Developer (MERN Stack) passionate about building modern
              web applications with clean code and great user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className={`hover:text-teal-400 transition-colors ${
                    theme === "dark" ? "" : "hover:text-teal-600"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`hover:text-teal-400 transition-colors ${
                    theme === "dark" ? "" : "hover:text-teal-600"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:text-teal-400 transition-colors ${
                    theme === "dark" ? "" : "hover:text-teal-600"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`hover:text-teal-400 transition-colors ${
                    theme === "dark" ? "" : "hover:text-teal-600"
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Tech Stack
            </h3>
            <ul className="text-sm space-y-1">
              <li>⚛️ React & Next.js</li>
              <li>🎨 Tailwind CSS</li>
              <li>🛠️ Node.js & Express</li>
              <li>💾 MongoDB</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className={`border-t mt-8 pt-8 text-center text-sm ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
          variants={itemVariants}
        >
          <p>
            © {new Date().getFullYear()} Montasir Mihad. All rights reserved.
          </p>
          <p className="mt-2">Built with passion and Next.js ❤️</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
