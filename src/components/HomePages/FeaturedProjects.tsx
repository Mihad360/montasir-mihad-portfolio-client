"use client";
import { Timeline, TimelineCard } from "@/components/reUse/Timeline";
import { useGetProjectsQuery } from "@/lib/redux/api/projectApi";
import Loading from "@/shared/Loading";
import { IProject } from "@/utils/types/project.types";
import { useTheme } from "next-themes";
import React from "react";

function FeaturedProjects() {
  const { theme } = useTheme();
  const { data: allProjects, isLoading } = useGetProjectsQuery(undefined);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = allProjects?.data;
  const featuredProjects = projects
    ?.filter((p: IProject) => p.featured === true)
    ?.slice(0, 3);

  const timelineData =
    featuredProjects?.map((project: IProject) => ({
      title: project?.title || "",
      content: (
        <TimelineCard
          id={project?._id}
          title={project?.title}
          description={project?.brief}
          imageUrl={project?.images?.[0]}
          liveLink={project?.liveUrl}
          primaryAction="Live Site"
          secondaryAction="View Details"
        />
      ),
    })) || [];

  return (
    <div
      className={theme === "dark" ? "text-white" : "bg-gray-200 text-gray-900"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {isLoading ? (
          <Loading />
        ) : timelineData.length > 0 ? (
          <Timeline data={timelineData} />
        ) : (
          <p className="text-center text-gray-500 py-10">
            No featured projects available.
          </p>
        )}
      </div>
    </div>
  );
}

export default FeaturedProjects;
