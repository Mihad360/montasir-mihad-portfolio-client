/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
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
import { technologyOptions } from "@/utils/constant/project";
import ProjectCard from "./ProjectCard";
import { useGetProjectsQuery } from "@/lib/redux/api/projectApi";
import Loading from "@/shared/Loading";
import { useForm } from "react-hook-form";
import { useDebounce } from "@/hooks/debounce";

const Projects = () => {
  const { register, watch, setValue } = useForm();
  const searchTerm = useDebounce(watch("search"));
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const { theme } = useTheme();

  // Build query parameters
  const queryParams = [];
  if (searchTerm && searchTerm.trim() !== "") {
    queryParams.push({ name: "searchTerm", value: searchTerm.trim() });
  }
  if (selectedTechnology && selectedTechnology !== "all") {
    queryParams.push({ name: "technologies", value: selectedTechnology });
  }

  const {
    data: allProjects,
    isLoading,
    isFetching,
  } = useGetProjectsQuery(queryParams.length ? queryParams : undefined);
  const projects = allProjects?.data;

  const clearFilters = () => {
    setSelectedTechnology("all");
    setValue("search", "");
  };

  if (isLoading) {
    return <Loading />;
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
                  {...register("search")}
                  type="text"
                  placeholder="Search by title, description, or technology..."
                  className="pl-9 border border-gray-600 focus-visible:ring-0 focus-visible:border-gray-500 text-white placeholder:text-gray-500"
                />
                {searchTerm && (
                  <X
                    className="absolute right-3 top-3 h-4 w-4 text-gray-400 cursor-pointer hover:text-red-500"
                    onClick={() => setValue("search", "")}
                  />
                )}
              </div>
            </div>
            <div>
              <Select
                value={selectedTechnology}
                onValueChange={(value) => setSelectedTechnology(value)}
              >
                <SelectTrigger className="border-gray-600 text-white focus-visible:ring-0 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Select technology" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#181A1E] border-none z-10 border-gray-600 text-white">
                  <SelectItem
                    className="cursor-pointer hover:bg-white/20"
                    value="all"
                  >
                    All Technologies
                  </SelectItem>
                  {technologyOptions.map((option) => (
                    <SelectItem
                      className="cursor-pointer hover:bg-white/20"
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

        {/* Loading state during search/filter */}
        {isFetching && (
          <div className="flex justify-center items-center h-40">
            <Loading />
          </div>
        )}

        {/* Projects Grid */}
        {!isFetching && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects?.length > 0 ? (
              projects.map((project: any) => (
                <ProjectCard
                  project={project}
                  theme={theme}
                  key={project._id}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">
                  No projects found matching your criteria
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-rose-500 hover:text-rose-400"
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
