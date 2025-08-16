/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { AuroraText } from "@/components/reUse/AnimateText";
import { Terminal, TypingAnimation } from "@/components/reUse/Terminal";
import { ShimmerButton } from "@/components/reUse/ShimmerButton";
import { useTheme } from "next-themes";

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants (unchanged)
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (!isMounted) return null;

  return (
    <motion.div
      className={`relative overflow-hidden pb-10 pt-24 md:pb-16 md:pt-32 ${
        theme === "dark" ? "text-white" : "bg-gray-200 text-gray-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid Pattern Overlay - Adjusted for mobile */}
      <div
        className={`absolute inset-0 z-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]"
        } bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] max-w-7xl mx-auto mt-8 md:mt-16`}
      ></div>

      {/* Main Content Container - Adjusted padding for mobile */}
      <div className="max-w-6xl mx-auto sm:px-6 md:px-16">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Hero Content - Stack on mobile, row on lg+ */}
          <div className="flex flex-col items-center lg:flex-row gap-6 md:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-4 md:space-y-5 z-20 pl-4 md:pl-0">
              {/* Name Section - Adjusted text sizes */}
              <motion.div variants={item}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-lg md:text-xl block tracking-wide">
                    I&apos;m
                  </span>{" "}
                  <AuroraText>Montasir Mihad</AuroraText>
                </h1>
              </motion.div>

              {/* Main Heading - Adjusted text sizes */}
              <motion.div
                variants={item}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-balance">
                  Creating Solutions for Development Process
                </h2>
              </motion.div>

              {/* Button - Adjusted size for mobile */}
              <a
                href="/Montasir-Mihad-Resume.pdf"
                download="Montasir-Mihad-Resume.pdf"
              >
                <ShimmerButton
                  className="shadow-lg md:shadow-2xl text-xs md:text-sm"
                  lightMode={theme !== "dark"}
                >
                  <span
                    className={`whitespace-pre-wrap text-center font-medium leading-none tracking-tight ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Download Resume
                  </span>
                </ShimmerButton>
              </a>
            </div>

            {/* Right Column - Terminal - Full width on mobile, reduced on larger screens */}
            <div className="w-full flex justify-center mt-8 md:mt-0 px-4 md:px-0 lg:w-[45%] xl:w-[40%] z-10">
              <Terminal
                className={`${
                  theme === "dark"
                    ? "bg-white/10 backdrop-blur-sm border border-white/20"
                    : "bg-gray-100/80 backdrop-blur-sm border border-gray-200"
                } shadow-md md:shadow-lg`}
                lightMode={theme !== "dark"}
              >
                {/* Terminal content unchanged */}
                <div className="flex items-center">
                  <span>&gt; const </span>
                  <TypingAnimation
                    delay={1500}
                    className={`${
                      theme === "dark" ? "text-pink-500" : "text-pink-600"
                    } font-bold`}
                  >
                    Montasir Mihad
                  </TypingAnimation>
                  <span> = &#123;</span>
                </div>

                <div className="flex items-center">
                  <span
                    className={`pl-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    pronouns:
                  </span>
                  <TypingAnimation
                    delay={2000}
                    className="pl-2 text--400 inline"
                  >
                    "He/Him",
                  </TypingAnimation>
                </div>

                <div className="flex items-center">
                  <span
                    className={`pl-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    location:
                  </span>
                  <TypingAnimation
                    delay={2500}
                    className="pl-2 text--400 inline"
                  >
                    "Narayangonj, Dhaka, Bangladesh",
                  </TypingAnimation>
                </div>

                <div className="flex items-center">
                  <span
                    className={`pl-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    role:
                  </span>
                  <TypingAnimation
                    delay={3000}
                    className="pl-2 text--400 inline"
                  >
                    "Full Stack Developer",
                  </TypingAnimation>
                </div>

                <div className="flex items-start">
                  <span
                    className={`pl-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    specialization:
                  </span>
                  <TypingAnimation
                    delay={3500}
                    className="pl-2 text--400 inline"
                  >
                    ["MERN Stack", "Full stack", "Backend development"],
                  </TypingAnimation>
                </div>

                <div className="flex items-start">
                  <span
                    className={`pl-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    currentFocus:
                  </span>
                  <TypingAnimation
                    delay={4000}
                    className="pl-2 text--400 inline"
                  >
                    "Building scalable web applications with cutting-edge
                    technologies",
                  </TypingAnimation>
                </div>

                <div className="flex items-start">
                  <span
                    className={`pl-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    funFact:
                  </span>
                  <TypingAnimation
                    delay={4500}
                    className="pl-2 text--400 inline"
                  >
                    "I turn coffee into code and ideas into digital reality!
                    ☕→💻"
                  </TypingAnimation>
                </div>

                <TypingAnimation delay={5000}>&#125;</TypingAnimation>
                {/* ... */}
              </Terminal>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Gradient Background Elements - Hidden on mobile for performance */}
      {theme === "dark" && (
        <>
          <motion.div
            className="hidden md:block w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[40px] md:blur-[60px] rounded-full absolute bottom-0 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.div
            className="hidden md:block w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[40px] md:blur-[60px] rounded-full absolute bottom-[30%] left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.7 }}
          />

          <motion.div
            className="hidden md:block w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[40px] md:blur-[60px] rounded-full absolute top-0 right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </>
      )}
    </motion.div>
  );
};

export default Banner;
