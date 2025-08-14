/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MagicCard } from "@/components/reUse/MagicCard";
import { Badge } from "@/components/ui/badge";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project,
  theme,
}: {
  project: any;
  theme: string | undefined;
}) => {
  return (
    <Link
      href={`/projects/${project?._id}`}
      key={project?._id}
      className={`transition-all duration-300 hover:transform group/card overflow-hidden rounded-xl ${
        theme === "dark" ? "bg-[#181A1E]" : "bg-white shadow-sm"
      }`}
    >
      <MagicCard gradientColor={theme === "dark" ? "#3A3A3A" : "#A19D9D"}>
        {/* Dark overlay on hover */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "bg-black" : "bg-gray-800"
          } opacity-0 transition-opacity duration-300 group-hover/card:opacity-10 z-10 rounded-xl`}
        />

        <div className="relative overflow-hidden">
          <div className="p-5 relative overflow-hidden">
            {/* Image with zoom effect */}
            <Image
              width={600}
              height={600}
              src={project?.images?.[0] || project?.images?.[1]}
              alt={project?.title}
              className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover/card:scale-105"
            />
          </div>
        </div>

        <div className="px-5 pb-3">
          <CardTitle
            className={`text-xl transition-colors ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {project?.title}
          </CardTitle>
          <CardDescription
            className={`line-clamp-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project?.description}
          </CardDescription>
        </div>

        <div className="space-y-3 px-5">
          {/* Project Stats */}
          <div
            className={`flex items-center justify-between text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar
                  className={`w-4 h-4 ${
                    theme === "dark" ? "" : "text-gray-600"
                  }`}
                />
                <span>{new Date(project?.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="pb-5">
            <div className="flex flex-wrap gap-2">
              {project?.technologies
                .slice(0, 3)
                .map((tech: string, index: number) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={`
                      ${
                        theme === "dark"
                          ? "bg-blue-600/20 text-blue-400 border-blue-500/30"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                      } text-xs
                      opacity-100 translate-y-0
                      transition-all duration-500 ease-out
                      delay-[${index * 75}ms]
                    `}
                  >
                    {tech}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </MagicCard>
    </Link>
  );
};

export default ProjectCard;
