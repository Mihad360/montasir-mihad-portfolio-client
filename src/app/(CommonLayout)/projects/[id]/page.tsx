/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Github, Globe, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useGetEachProjectsQuery } from "@/lib/redux/api/projectApi";
import Loading from "@/shared/Loading";
import { IProject } from "@/utils/types/project.types";
import { useTheme } from "next-themes";

const ProjectDetail = () => {
  const { theme } = useTheme();
  const params = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const id = params?.id;
  const { data: projects, isLoading } = useGetEachProjectsQuery(id);
  const project: IProject = projects?.data;

  const primaryColor = "#06B6D4";
  const borderColor =
    theme === "dark" ? "hsl(217.2 32.6% 17.5%)" : "hsl(0 0% 80%)";
  const bgColor = theme === "dark" ? "hsl(240 5.9% 10%)" : "hsl(0 0% 100%)";
  const hoverBgColor =
    theme === "dark" ? "hsl(240 3.7% 15.9%)" : "hsl(0 0% 96%)";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`${theme === "dark" ? "" : "bg-gray-200"}`}>
      <div className={`max-w-5xl mx-auto px-4 py-8 md:py-24`}>
        {/* Gradient Background Elements (Dark mode only) */}
        {theme === "dark" && (
          <>
            <motion.div
              className="w-[250px] h-[250px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] absolute top-10 left-10 z-0 md:block hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />
            <motion.div
              className="w-[250px] h-[250px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] fixed top-2/3 right-10 z-0 md:block hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />
          </>
        )}

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <button
              onClick={() => setLightboxOpen(false)}
              className={`absolute right-4 top-4 z-50 rounded-full p-2 ${
                theme === "dark"
                  ? "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="relative h-[90vh] w-[90vw]">
              <Image
                src={project?.images[selectedImageIndex] || "/placeholder.svg"}
                alt={`Project image ${selectedImageIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {project?.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === selectedImageIndex
                      ? "bg-cyan-500 scale-125"
                      : theme === "dark"
                      ? "bg-gray-500"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Main Content Area */}
          <div className="lg:col-span-2 z-10">
            {/* Project Title and Brief */}
            <Card
              className={`mb-5 shadow-2xl ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-4xl font-extrabold ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  {project?.title}
                </CardTitle>
                <CardDescription
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project?.brief}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge
                  className="px-3 py-1 text-sm font-medium"
                  style={{ backgroundColor: primaryColor, color: bgColor }}
                >
                  {project?.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={`px-3 py-1 text-sm font-medium ${
                    theme === "dark"
                      ? "border-zinc-700 bg-zinc-800 text-gray-300"
                      : "border-gray-300 bg-gray-100 text-gray-700"
                  }`}
                >
                  {project?.status}
                </Badge>
                {project?.featured && (
                  <Badge
                    className="px-3 py-1 text-sm font-medium"
                    style={{ backgroundColor: primaryColor, color: bgColor }}
                  >
                    Featured
                  </Badge>
                )}
              </CardContent>
            </Card>

            {/* Masonry Image Gallery */}
            <Card
              className={`mb-5 shadow-2xl ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  Gallery
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <style jsx>{`
                  .masonry-grid {
                    display: flex;
                    margin-left: -1rem;
                    width: auto;
                  }
                  .masonry-column {
                    padding-left: 1rem;
                    background-clip: padding-box;
                  }
                  .masonry-item {
                    margin-bottom: 1rem;
                  }
                `}</style>

                <div className="masonry-grid">
                  {[0, 1, 2].map((colIndex) => (
                    <div key={colIndex} className="masonry-column w-1/3">
                      {project?.images
                        .filter(
                          (_: any, index: number) => index % 3 === colIndex
                        )
                        .map((image: any, index: number) => {
                          const actualIndex = colIndex + index * 3;
                          return (
                            <div
                              key={actualIndex}
                              className={`masonry-item overflow-hidden rounded-lg transition-all duration-300 ${
                                theme === "dark"
                                  ? "hover:shadow-lg hover:shadow-cyan-500/20"
                                  : "hover:shadow-md hover:shadow-gray-400/20"
                              }`}
                              onClick={() => {
                                setSelectedImageIndex(actualIndex);
                                setLightboxOpen(true);
                              }}
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Project image ${actualIndex + 1}`}
                                width={800}
                                height={600}
                                className="h-auto w-full cursor-zoom-in object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                          );
                        })}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Description */}
            <Card
              className={`mb-5 shadow-lg ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent
                className={`space-y-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project?.description.map(
                  (paragraph: React.ReactNode, index: React.Key) => (
                    <p key={index}>{paragraph}</p>
                  )
                )}
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card
              className={`mb-5 shadow-lg ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {project?.keyFeatures.map(
                    (feature: React.ReactNode, index: React.Key) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span
                          className="text-xl"
                          style={{ color: primaryColor }}
                        >{`\u2022`}</span>{" "}
                        {feature}
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card
              className={`mb-5 shadow-lg ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {project?.challenges.map(
                    (
                      challenge: {
                        title: React.ReactNode;
                        description: React.ReactNode;
                      },
                      index: React.Key
                    ) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className={
                          theme === "dark"
                            ? "border-zinc-700"
                            : "border-gray-200"
                        }
                      >
                        <AccordionTrigger
                          className={`${
                            theme === "dark" ? "text-gray-200" : "text-gray-800"
                          } hover:no-underline`}
                        >
                          {challenge.title}
                        </AccordionTrigger>
                        <AccordionContent
                          className={
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          {challenge.description}
                        </AccordionContent>
                      </AccordionItem>
                    )
                  )}
                </Accordion>
              </CardContent>
            </Card>

            {/* Outcome */}
            <Card
              className={`shadow-lg ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  Outcome
                </CardTitle>
              </CardHeader>
              <CardContent
                className={theme === "dark" ? "text-gray-300" : "text-gray-700"}
              >
                <p>{project?.outcome}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Details Column */}
          <div className="lg:col-span-1">
            <Card
              className={`sticky -top-10 shadow-2xl ${
                theme === "dark" ? "bg-[#181A1E]" : "bg-white"
              }`}
              style={{
                borderColor: borderColor,
                backgroundColor: hoverBgColor,
              }}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl ${
                    theme === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent
                className={`space-y-3 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <div>
                  <h3
                    className={`mb-1 text-lg font-semibold ${
                      theme === "dark" ? "text-gray-50" : "text-gray-900"
                    }`}
                  >
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies.map(
                      (tech: React.ReactNode, index: React.Key) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className={`px-2 py-1 text-sm ${
                            theme === "dark"
                              ? "border-zinc-700 bg-zinc-800"
                              : "border-gray-300 bg-gray-100"
                          }`}
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3
                    className={`mb-1 text-lg font-semibold ${
                      theme === "dark" ? "text-gray-50" : "text-gray-900"
                    }`}
                  >
                    Duration
                  </h3>
                  <p>{project?.durationInDays} days</p>
                </div>

                <div>
                  <h3
                    className={`mb-1 text-lg font-semibold ${
                      theme === "dark" ? "text-gray-50" : "text-gray-900"
                    }`}
                  >
                    Team
                  </h3>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {project?.isGroupProject
                      ? `${project?.team} members`
                      : "Solo Project"}
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-1 text-lg font-semibold ${
                      theme === "dark" ? "text-gray-50" : "text-gray-900"
                    }`}
                  >
                    Stars
                  </h3>
                  <p className="flex items-center gap-2">
                    <Star
                      className="h-4 w-4"
                      fill={primaryColor}
                      stroke={primaryColor}
                    />
                    {project?.stars}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  {project?.liveUrl && (
                    <Link
                      href={project?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className={`w-full gap-2 cursor-pointer ${
                          theme === "dark"
                            ? "border-zinc-700 text-gray-50 hover:bg-zinc-800 bg-transparent"
                            : "border-gray-300 text-gray-800 hover:bg-gray-100 bg-transparent"
                        }`}
                      >
                        <Globe className="h-5 w-5" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project?.githubClient && (
                    <Link
                      href={project?.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="w-full gap-2 cursor-pointer"
                        style={{
                          backgroundColor: primaryColor,
                          color: bgColor,
                        }}
                      >
                        <Github className="h-5 w-5" />
                        GitHub (Client)
                      </Button>
                    </Link>
                  )}
                  {project?.githubServer && (
                    <Link
                      href={project?.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="w-full gap-2 cursor-pointer"
                        style={{
                          backgroundColor: primaryColor,
                          color: bgColor,
                        }}
                      >
                        <Github className="h-5 w-5" />
                        GitHub (Server)
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
