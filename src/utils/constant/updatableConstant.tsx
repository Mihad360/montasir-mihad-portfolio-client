import { LocateFixedIcon } from "lucide-react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const personalInfo = [
  {
    icon: <FaEnvelope className="text-[#06B6D4]" />,
    label: "Email",
    value: "ahmedmihad962@gmail.com",
  },
  {
    icon: <FaPhone className="text-[#06B6D4]" />,
    label: "Phone",
    value: "+8801604223336",
  },
  {
    icon: <LocateFixedIcon className="text-[#06B6D4]" />,
    label: "Location",
    value: "Narayangonj, Dhaka",
  },
];

export const education = [
  {
    year: "2023 - Running",
    title: "Diploma in Computer Science",
    institute: "Dhaka Polytechnic Institute",
  },
];

export const experience = [
  {
    year: "2025, September 1 - Running",
    title: "Full Stack Developer",
    company: "SparkTech Agency",
    description:
      "Developing and maintaining web applications using modern technologies like React, Next.js, Node.js, and MongoDB.",
  },
];

export const certifications = [
  {
    title: "Complete Web Development Course (Level 1)",
    issuer: "Programming Hero",
    batch: "Batch 8",
    date: "2023",
    skills: ["JavaScript", "React.js", "Node.js", "MongoDB"],
    verificationLink:
      "https://drive.google.com/file/d/1n8iP7yRxF-KFliOEAPKuVAQpakV5TZg6/view?usp=sharing",
  },
];
