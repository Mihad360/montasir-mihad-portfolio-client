/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
} from "react-icons/fa";
import { LocateFixedIcon } from "lucide-react";

const personalInfo = [
  {
    icon: <FaEnvelope className="text-[#06B6D4]" />,
    label: "Email",
    value: "ahmedmihad962@gmail.com",
  },
  {
    icon: <FaPhone className="text-[#06B6D4]" />,
    label: "Phone",
    value: "+1 (123) 456-7890",
  },
  {
    icon: <FaBirthdayCake className="text-[#06B6D4]" />,
    label: "Date of Birth",
    value: "January 1, 1990",
  },
  {
    icon: <LocateFixedIcon className="text-[#06B6D4]" />,
    label: "Location",
    value: "Narayangonj, Dhaka",
  },
];

const education = [
  {
    year: "2022 - 2024",
    title: "Diploma in Computer Science",
    institute: "ABC Polytechnic Institute",
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary Certificate",
    institute: "XYZ College",
  },
];

const AboutProfessionalSection = () => {
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
    <div className="max-w-5xl mx-auto text-white py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#06B6D4] mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect Me
      </motion.h2>

      {/* Personal Info and Education Row */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        {/* Personal Info Card */}
        <motion.div
          className="md:w-1/2 bg-[#1C1E22] hover:bg-[#181A1E] p-5 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 border-l-4 border-[#06B6D4] pl-4">
            Personal Information
          </h3>
          <ul className="space-y-4">
            {personalInfo.map((info, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-4"
                variants={item}
                initial="hidden"
                animate="show"
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-xl mt-1">{info.icon}</div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          className="md:w-1/2 z-20"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#06B6D4] pl-4">
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((edu, i) => (
              <motion.li
                key={i}
                className="bg-[#1e293b] p-4 rounded-xl shadow-md"
                variants={item}
              >
                <p className="font-bold text-[#06B6D4] flex items-center gap-2">
                  <FaGraduationCap /> {edu.title}
                </p>
                <p className="text-sm">{edu.institute}</p>
                <p className="text-xs text-gray-400">{edu.year}</p>
              </motion.li>
            ))}
          </ul>
          {/* Professional Development */}
          <motion.div
            className="mt-8 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#06B6D4] pl-4">
              Professional Development
            </h3>
            <motion.a
              href="#"
              className="flex items-center gap-2 text-[#06B6D4] hover:underline"
              whileHover={{ scale: 1.02 }}
            >
              <FaCertificate /> View Certifications
            </motion.a>
            <p className="text-sm mt-2 text-gray-300">
              Continuously upgrading skills through online courses and hands-on
              projects.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Fun Facts and GitHub Row */}
      {/* <div className="flex flex-col md:flex-row gap-4"> */}
      {/* Fun Facts */}
      {/* <motion.div
          className="md:w-[40%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#06B6D4] pl-4">
            Fun Facts About Me
          </h3>
          <ul className="space-y-3">
            {funFacts.map((fact, index) => (
              <motion.li
                key={index}
                className="bg-[#1e293b] p-3 rounded-lg shadow-md flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-[#06B6D4]">•</span>
                <span>{fact}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div> */}

      {/* GitHub Stats */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="p-4 rounded-xl h-full">
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#06B6D4] pl-4">
            Coding Journey
          </h3>
          <p className="text-sm mb-4">
            I&apos;ve contributed to over 50+ repositories with a focus on
            open-source projects. My most used languages are JavaScript and
            TypeScript.
          </p>
          <div className="">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=mihad360&bg_color=transparent&color=00b4d8&line=00b4d8&point=ffffff&area=true&hide_border=true"
              alt="Contribution Graph"
            />
          </div>
        </div>
      </motion.div>
      {/* </div> */}
    </div>
  );
};

export default AboutProfessionalSection;
