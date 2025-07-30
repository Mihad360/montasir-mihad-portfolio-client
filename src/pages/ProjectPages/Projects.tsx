"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { projectsData, technologyOptions } from "@/utils/constant/project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTechnology("");
  };

  if (!isClient) {
    // Return a simple loading state or null during SSR
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
        <div className="max-w-7xl mx-auto">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h2 className="text-xl text-center md:text-4xl text-white dark:text-white pt-24 pb-6">
          <span className="text-white font-bold">Projects</span>{" "}
          <span className="text-gray-500 font-medium">Showcase</span>
        </h2>

        {/* Search and Filter Section */}
        <div className="bg-[#181A1E] rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by title, description, or technology..."
                  className="pl-9 cursor-pointer border border-gray-600 focus-visible:ring-0 focus-visible:border-gray-500 text-white placeholder:text-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select
                value={selectedTechnology}
                onValueChange={setSelectedTechnology}
              >
                <SelectTrigger className="border-gray-600 text-white focus-visible:ring-0 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Select technology" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#181A1E] border-none z-10 border-gray-600 text-white">
                  {technologyOptions.map((option) => (
                    <SelectItem
                      className="cursor-pointer  hover:bg-white/20"
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={clearFilters}
                className="bg-rose-500 hover:bg-rose-400 border-none text-gray-300 cursor-pointer text-3xl"
              >
                <X className="" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <ProjectCard project={project} theme={theme} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
