/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBriefcase } from "react-icons/fa";
import {
  certifications,
  education,
  experience,
  personalInfo,
} from "@/utils/constant/updatableConstant";
import { useTheme } from "next-themes";

const AboutProfessionalSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-16 py-10 md:py-16">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#06B6D4] mb-6 md:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Connect Me
        </motion.h2>

        {/* Personal Info and Education Row */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8 md:mb-12">
          {/* Personal Info Card */}
          <motion.div
            className={`w-full lg:w-1/2 p-4 md:p-5 rounded-lg ${
              theme === "dark"
                ? "bg-[#1C1E22] hover:bg-[#181A1E]"
                : "bg-white hover:bg-gray-50 shadow-sm"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 border-l-4 border-[#06B6D4] pl-3 md:pl-4 ${
                theme === "dark" ? "" : "text-gray-800"
              }`}
            >
              Personal Information
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {personalInfo.map((info, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 md:gap-4"
                  variants={item}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: idx * 0.1 }}
                >
                  <div
                    className={`text-lg md:text-xl mt-0.5 ${
                      theme === "dark" ? "text-[#06B6D4]" : "text-blue-600"
                    }`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className={`text-xs md:text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {info.label}
                    </p>
                    <p
                      className={`text-sm md:text-base font-medium ${
                        theme === "dark" ? "" : "text-gray-800"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Education Section */}
            <h3
              className={`text-base md:text-lg font-semibold mb-3 md:mb-4 mt-4 md:mt-6 border-l-3 border-[#06B6D4] pl-3 md:pl-4 ${
                theme === "dark" ? "" : "text-gray-800"
              }`}
            >
              Education
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {education.map((edu, i) => (
                <motion.li
                  key={`edu-${i}`}
                  className={`p-2 md:p-3 rounded-lg md:rounded-xl shadow-md ${
                    theme === "dark" ? "bg-[#1e293b]" : "bg-gray-50"
                  }`}
                  variants={item}
                >
                  <p className="font-bold text-[#06B6D4] flex items-center gap-2 text-sm md:text-base">
                    <FaGraduationCap /> {edu.title}
                  </p>
                  <p
                    className={`text-xs md:text-sm ${
                      theme === "dark" ? "" : "text-gray-700"
                    }`}
                  >
                    {edu.institute}
                  </p>
                  <p
                    className={`text-xs ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {edu.year}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience and Certifications */}
          <motion.div
            className="w-full lg:w-1/2 z-20"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {/* Experience Section */}
            <h3
              className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 border-l-4 border-[#06B6D4] pl-3 md:pl-4 ${
                theme === "dark" ? "" : "text-gray-800"
              }`}
            >
              Experience
            </h3>
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {experience.map((exp, i) => (
                <motion.li
                  key={`exp-${i}`}
                  className={`p-3 md:p-5 rounded-lg md:rounded-xl shadow-lg border ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-[#1e293b] to-[#1e3a8a] border-[#06B6D4]/20"
                      : "bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200"
                  }`}
                  variants={item}
                >
                  <p className="font-bold text-[#06B6D4] flex items-center gap-2 text-sm md:text-base">
                    <FaBriefcase /> {exp.title}
                  </p>
                  <p
                    className={`text-xs md:text-sm ${
                      theme === "dark" ? "" : "text-gray-700"
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p
                    className={`text-xs mb-1 md:mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {exp.year}
                  </p>
                  <p
                    className={`text-xs md:text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Certifications Section */}
            <motion.div
              className="z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3
                className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 border-l-4 border-[#06B6D4] pl-3 md:pl-4 ${
                  theme === "dark" ? "" : "text-gray-800"
                }`}
              >
                Certifications
              </h3>

              <div className="space-y-3 md:space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl shadow-md ${
                      theme === "dark" ? "bg-[#1e293b]" : "bg-white"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="bg-[#06B6D4] p-2 md:p-3 rounded-md md:rounded-lg">
                        <FaCertificate className="text-white text-lg md:text-xl" />
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-base md:text-lg ${
                            theme === "dark" ? "" : "text-gray-800"
                          }`}
                        >
                          {cert.title}
                        </h4>
                        <p
                          className={`text-xs md:text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {cert.issuer} • {cert.batch} • {cert.date}
                        </p>

                        <div className="mt-2 md:mt-3">
                          <p
                            className={`text-xs md:text-sm font-medium mb-1 ${
                              theme === "dark" ? "" : "text-gray-700"
                            }`}
                          >
                            Skills Gained:
                          </p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {cert.skills.map((skill, i) => (
                              <span
                                key={i}
                                className={`px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs rounded-full ${
                                  theme === "dark"
                                    ? "bg-[#06B6D4]/10 text-[#06B6D4]"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 md:mt-3 inline-block text-xs md:text-sm text-[#06B6D4] hover:underline"
                        >
                          View Certificate →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className={`p-3 md:p-4 rounded-lg md:rounded-xl h-full ${
              theme === "dark" ? "" : "bg-white shadow-sm"
            }`}
          >
            <h3
              className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 border-l-4 border-[#06B6D4] pl-3 md:pl-4 ${
                theme === "dark" ? "" : "text-gray-800"
              }`}
            >
              Coding Journey
            </h3>
            <p
              className={`text-xs md:text-sm mb-3 md:mb-4 ${
                theme === "dark" ? "" : "text-gray-600"
              }`}
            >
              I&apos;ve contributed to over 50+ repositories with a focus on
              open-source projects. My most used languages are JavaScript and
              TypeScript.
            </p>
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=mihad360&bg_color=transparent&color=${
                  theme === "dark" ? "00b4d8" : "3b82f6"
                }&line=${theme === "dark" ? "00b4d8" : "3b82f6"}&point=${
                  theme === "dark" ? "ffffff" : "3b82f6"
                }&area=true&hide_border=true`}
                alt="Contribution Graph"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProfessionalSection;
