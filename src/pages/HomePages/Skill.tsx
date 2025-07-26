"use client";

import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  SiFigma,
  SiApple,
  SiAngular,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "Figma", icon: SiFigma },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Apple", icon: SiApple },
  { name: "Apple", icon: SiApple },
  { name: "Angular", icon: SiAngular },
  { name: "Angular", icon: SiAngular },
  { name: "Angular", icon: SiAngular },
  { name: "Angular", icon: SiAngular },
];

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Initial load animation with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 500); // 0.5 second delay on page load
    return () => clearTimeout(timer);
  }, [controls]);

  // Scroll-triggered animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skillChunks = [];
  for (let i = 0; i < skills.length; i += 5) {
    skillChunks.push(skills.slice(i, i + 5));
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const marqueeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <div className="pb-12" ref={ref}>
      <motion.h2
        className="text-xl text-center md:text-4xl text-white dark:text-white pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          },
        }}
      >
        <span className="text-white font-bold">Skills</span>{" "}
        <span className="text-gray-500 font-medium">& Expertise</span>
      </motion.h2>

      <motion.p
        className="text-neutral-500 text-center dark:text-neutral-300 text-sm md:text-base"
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}
      >
        I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a
        timeline of my journey.
      </motion.p>

      <div className="relative py-5 pt-20 overflow-hidden flex items-center justify-center">
        {/* Smooth Infinite Marquee - Now properly animated */}
        <motion.div
          className="absolute w-full h-12 -rotate-3 top-1/2 -translate-y-1/2 overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={marqueeVariants}
        >
          <div className="whitespace-nowrap flex items-center h-full border-t-2 border-b-2 border-white/20">
            {[...Array(4)].map((_, loopIndex) => (
              <motion.div
                key={loopIndex}
                className="inline-flex items-center"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {skills.map((skill, index) => (
                  <span
                    key={`${loopIndex}-${index}`}
                    className="mx-8 inline-flex items-center"
                  >
                    <span className="text-red-400">•</span>
                    <span className="ml-2 text-white/70 text-xl font-medium tracking-wider">
                      {skill.name.toUpperCase()}
                    </span>
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consistent Skill Circles */}
        <motion.div
          className="flex flex-col gap-8 z-10"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skillChunks.map((chunk, chunkIndex) => (
            <motion.div
              key={chunkIndex}
              className="flex gap-6 justify-center"
              variants={itemVariants}
            >
              {chunk.map((skill, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  className="group w-44 h-32 flex flex-col items-center justify-center 
                    bg-[#1C1E22] hover:bg-[#181A1E] shadow-gray-800 shadow-lg overflow-hidden relative 
                    transition-all duration-300 ease-in-out cursor-pointer rounded-lg"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                >
                  {/* Skill Icon */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <skill.icon className="text-3xl text-white mb-1 group-hover:text-[#06B6D4] transition-colors duration-300" />
                    <span className="text-xs font-medium text-white/90 group-hover:text-[#06B6D4] tracking-wide mt-1 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
