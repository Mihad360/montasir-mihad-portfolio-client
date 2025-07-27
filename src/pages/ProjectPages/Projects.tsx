"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MagicCard } from "@/components/reUse/MagicCard";
import { useTheme } from "next-themes";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built with scalability and performance in mind.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    status: "Completed",
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    date: "2024-01-15",
    team: 3,
    stars: 124,
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics dashboard with AI-driven insights, predictive modeling, and interactive data visualizations for business intelligence.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    category: "AI/ML",
    status: "In Progress",
    githubUrl: "https://github.com/example/ai-dashboard",
    liveUrl: "https://ai-dashboard-demo.vercel.app",
    date: "2024-02-20",
    team: 5,
    stars: 89,
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform mobile app for fitness tracking with workout plans, nutrition monitoring, and social features. Includes wearable device integration.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo"],
    category: "Mobile",
    status: "Completed",
    githubUrl: "https://github.com/example/fitness-tracker",
    liveUrl: "https://fitness-app-demo.com",
    date: "2023-12-10",
    team: 4,
    stars: 156,
    featured: false,
  },
];

const technologyOptions = [
  { label: "All Technologies", value: "all" },
  { label: "React", value: "React" },
  { label: "Next.js", value: "Next.js" },
  { label: "Node.js", value: "Node.js" },
  { label: "Python", value: "Python" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "PostgreSQL", value: "PostgreSQL" },
  { label: "Firebase", value: "Firebase" },
  { label: "React Native", value: "React Native" },
];

const categoryOptions = [
  { label: "All Categories", value: "all" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "AI/ML", value: "AI/ML" },
  { label: "Mobile", value: "Mobile" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

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
    <div className="">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <h2 className="text-xl text-center md:text-4xl text-white dark:text-white pt-24 pb-6">
          <span className="text-white font-bold">Projects</span>{" "}
          <span className="text-gray-500 font-medium">Showcase</span>
        </h2>

        {/* Search and Filter Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by title, description, or technology..."
                  className="pl-9 bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500"
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
                <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <SelectValue placeholder="Select technology" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600 text-white">
                  {technologyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
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
                className="bg-gray-900/50 border-gray-600 hover:bg-gray-700 text-gray-300"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="bg-[#1C1E22] border-none transition-all duration-300 hover:transform group overflow-hidden"
            >
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <div className="relative">
                  <Image
                    width={500}
                    height={500}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`border ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-700/50 text-gray-300 border-gray-600/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="bg-gray-700/50 text-gray-300 border-gray-600/50 text-xs"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(project.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-900/50 border-gray-600 hover:bg-gray-700 text-gray-300"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </MagicCard>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
