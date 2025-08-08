import { FaHome, FaCog } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";

export const sidebarRoutes = [
  {
    title: "Add Project",
    url: "/dashboard/admin/add-project",
    icon: FaHome,
  },
  {
    title: "Add Skill",
    url: "/dashboard/admin/add-skill",
    icon: SiHyperskill,
  },
  {
    title: "Add Blog",
    url: "/dashboard/admin/add-blog",
    icon: FaCog,
  },
];
