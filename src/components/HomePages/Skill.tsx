"use client";
import { useGetSkillsQuery } from "@/lib/redux/api/skillApi";
import Loading from "@/shared/Loading";
import { ISkill } from "@/utils/types/project.types";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const Skills = () => {
  const { data: skillsData, isLoading } = useGetSkillsQuery(undefined);
  const skills = skillsData?.data;
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

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
  for (let i = 0; i < skills?.length; i += 5) {
    skillChunks.push(skills?.slice(i, i + 5));
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`pb-12 ${theme === "dark" ? "" : "bg-gray-200"}`} ref={ref}>
      <motion.h2
        className={`text-xl text-center md:text-4xl pt-12 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
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
        <span
          className={`${
            theme === "dark" ? "text-white" : "text-gray-900"
          } font-bold`}
        >
          Skills
        </span>{" "}
        <span
          className={`${
            theme === "dark" ? "text-gray-500" : "text-gray-600"
          } font-medium`}
        >
          & Expertise
        </span>
      </motion.h2>

      <motion.p
        className={`text-center text-sm md:text-base ${
          theme === "dark" ? "text-neutral-500" : "text-gray-600"
        }`}
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

      <div
        className={`relative py-5 pt-20 overflow-hidden flex items-center justify-center ${
          theme === "dark" ? "" : "bg-gray-200"
        }`}
      >
        {/* Smooth Infinite Marquee - Now properly animated */}
        <motion.div
          className="absolute w-full h-12 -rotate-3 top-1/2 -translate-y-1/2 overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={marqueeVariants}
        >
          <div
            className={`whitespace-nowrap flex items-center h-full border-t-2 border-b-2 ${
              theme === "dark" ? "border-white/20" : "border-gray-300"
            }`}
          >
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
                {skills.map((skill: ISkill, index: number) => (
                  <span
                    key={`${loopIndex}-${index}`}
                    className="mx-8 inline-flex items-center"
                  >
                    <span
                      className={`${
                        theme === "dark" ? "text-red-400" : "text-red-500"
                      }`}
                    >
                      •
                    </span>
                    <span
                      className={`ml-2 text-xl font-medium tracking-wider ${
                        theme === "dark" ? "text-white/70" : "text-gray-700"
                      }`}
                    >
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
              {chunk.map((skill: ISkill, i: number) => (
                <Link href={skill.websiteLink} target="_blank" key={i}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className={`group w-44 h-32 flex flex-col items-center justify-center 
                    shadow-lg overflow-hidden relative transition-all duration-300 ease-in-out 
                    cursor-pointer rounded-lg ${
                      theme === "dark"
                        ? "bg-[#1C1E22] hover:bg-[#181A1E] shadow-gray-800"
                        : "bg-gray-700 hover:bg-gray-800 shadow-gray-400"
                    }`}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    {/* Skill Icon */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <div
                        className="w-16 h-16"
                        dangerouslySetInnerHTML={{ __html: skill.icon }}
                      />
                      <span
                        className={`text-sm font-medium tracking-wide mt-1 transition-colors duration-300 ${
                          theme === "dark"
                            ? "text-[#06B6D4] group-hover:text-white"
                            : "text-[#06B6D4] group-hover:text-gray-100"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
