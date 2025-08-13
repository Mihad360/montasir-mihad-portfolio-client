/* eslint-disable react/no-unescaped-entities */
"use client";
import { ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { AuroraText } from "@/components/reUse/AnimateText";
import { Terminal, TypingAnimation } from "@/components/reUse/Terminal";
import { ShimmerButton } from "@/components/reUse/ShimmerButton";

const Banner = () => {
  const text = "SCROLL TO EXPLORE -";
  const letters = text.split("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
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

  const floating: Variants = {
    initial: { y: -10 },
    animate: {
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const spin: Variants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  if (!isMounted) return null;

  return (
    <motion.div
      className="relative overflow-hidden pb-16 pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] max-w-7xl mx-auto mt-16"></div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Hero Content */}
          <div className="flex flex-col items-center lg:flex-row gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-5 z-20">
              {/* Name Section */}
              <motion.div variants={item}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl z-20 lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-xl block tracking-wide">I&apos;m</span>{" "}
                  <AuroraText>Montasir Mihad</AuroraText>
                </h1>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                variants={item}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-3xl z-10 sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Creating Solutions for Development Process
                </h2>
              </motion.div>
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download Resume
                </span>
              </ShimmerButton>
            </div>

            {/* Right Column - Terminal */}
            <div className="w-full lg:w-[45%] xl:w-[40%] z-10">
              <Terminal className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <div className="flex items-center">
                  <span>&gt; const </span>
                  <TypingAnimation
                    delay={1500}
                    className="text-pink-500 font-bold"
                  >
                    Montasir Mihad
                  </TypingAnimation>
                  <span> = &#123;</span>
                </div>

                <div className="flex items-center">
                  <span className="pl-4 text-blue-600">pronouns:</span>
                  <TypingAnimation
                    delay={2000}
                    className="pl-2 text--400 inline"
                  >
                    "He/Him",
                  </TypingAnimation>
                </div>

                <div className="flex items-center">
                  <span className="pl-4 text-blue-600">location:</span>
                  <TypingAnimation
                    delay={2500}
                    className="pl-2 text--400 inline"
                  >
                    "Bangladesh 🇧🇩",
                  </TypingAnimation>
                </div>

                <div className="flex items-center">
                  <span className="pl-4 text-blue-600">role:</span>
                  <TypingAnimation
                    delay={3000}
                    className="pl-2 text--400 inline"
                  >
                    "Full Stack Developer",
                  </TypingAnimation>
                </div>

                <div className="flex items-start">
                  <span className="pl-4 text-blue-600">specialization:</span>
                  <TypingAnimation
                    delay={3500}
                    className="pl-2 text--400 inline"
                  >
                    ["MERN Stack", "Full stack", "Backend development"],
                  </TypingAnimation>
                </div>

                <div className="flex items-start">
                  <span className="pl-4 text-blue-600">currentFocus:</span>
                  <TypingAnimation
                    delay={4000}
                    className="pl-2 text--400 inline"
                  >
                    "Building scalable web applications with cutting-edge
                    technologies",
                  </TypingAnimation>
                </div>

                <div className="flex items-start">
                  <span className="pl-4 text-blue-600">funFact:</span>
                  <TypingAnimation
                    delay={4500}
                    className="pl-2 text--400 inline"
                  >
                    "I turn coffee into code and ideas into digital reality!
                    ☕→💻"
                  </TypingAnimation>
                </div>

                <TypingAnimation delay={5000}>&#125;</TypingAnimation>
              </Terminal>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden flex items-center justify-center mt-16">
        <motion.div
          className="relative w-48 h-48 flex items-center justify-center"
          variants={floating}
          initial="initial"
          animate="animate"
        >
          {/* Circular Spinning Text */}
          <motion.div
            className="absolute inset-0"
            variants={spin}
            initial="initial"
            animate="animate"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="absolute text-white text-sm font-medium tracking-wider"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${
                    (index * 360) / letters.length
                  }deg) translate(0, -85px)`,
                  transformOrigin: "0 0",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05 + 0.5,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Center Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Gradient Background Elements */}
      <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] rounded-full absolute bottom-0 left-0 md:block hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] rounded-full absolute bottom-[30%] left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] rounded-full absolute top-0 right-0 md:block hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
    </motion.div>
  );
};

export default Banner;
