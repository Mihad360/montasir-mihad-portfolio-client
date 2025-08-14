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
import Loading from "@/shared/Loading";
import { useForm } from "react-hook-form";
import { useDebounce } from "@/hooks/debounce";
import { useGetProjectsQuery } from "@/lib/redux/api/projectApi";
import { technologyOptions } from "@/utils/constant/project";
import ProjectCard from "@/components/ProjectPages/ProjectCard";

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
    <div
      className={`pb-16 ${theme === "dark" ? "" : "bg-gray-200 text-gray-900"}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h2
          className={`text-xl text-center md:text-4xl pt-24 pb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <span
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } font-bold`}
          >
            Projects
          </span>{" "}
          <span
            className={`${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            } font-medium`}
          >
            Showcase
          </span>
        </h2>

        {/* Search and Filter Section */}
        <div
          className={`rounded-2xl p-6 mb-8 ${
            theme === "dark" ? "bg-[#181A1E]" : "bg-white shadow-sm"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <div className="relative">
                <Search
                  className={`absolute left-3 top-3 h-4 w-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <Input
                  {...register("search")}
                  type="text"
                  placeholder="Search by title, description, or technology..."
                  className={`pl-9 ${
                    theme === "dark"
                      ? "border-gray-600 focus-visible:border-gray-500 text-white placeholder:text-gray-500"
                      : "border-gray-300 focus-visible:border-gray-400 text-gray-900 placeholder:text-gray-400"
                  } focus-visible:ring-0`}
                />
                {searchTerm && (
                  <X
                    className={`absolute right-3 top-3 h-4 w-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    } cursor-pointer hover:text-red-500`}
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
                <SelectTrigger
                  className={`${
                    theme === "dark"
                      ? "border-gray-600 text-white"
                      : "border-gray-300 text-gray-900"
                  } focus-visible:ring-0 cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <Filter
                      className={`w-4 h-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                    <SelectValue placeholder="Select technology" />
                  </div>
                </SelectTrigger>
                <SelectContent
                  className={`${
                    theme === "dark"
                      ? "bg-[#181A1E] border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } z-10`}
                >
                  {technologyOptions.map((option) => (
                    <SelectItem
                      className={`cursor-pointer ${
                        theme === "dark"
                          ? "hover:bg-white/20"
                          : "hover:bg-gray-100"
                      }`}
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
                className={`${
                  theme === "dark"
                    ? "bg-rose-500 hover:bg-rose-400 text-gray-300"
                    : "bg-rose-500 hover:bg-rose-400 text-white"
                } border-none cursor-pointer text-3xl`}
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
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  No projects found matching your criteria
                </p>
                <Button
                  variant="ghost"
                  className={`mt-4 ${
                    theme === "dark"
                      ? "text-rose-500 hover:text-rose-400"
                      : "text-rose-600 hover:text-rose-500"
                  }`}
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
