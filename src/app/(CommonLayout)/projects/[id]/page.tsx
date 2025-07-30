"use client";
import ProjectDetail from "@/pages/ProjectPages/SpeceficProject";

const project = {
  id: 1,
  title: "E-Commerce Platform",
  brief:
    "A scalable full-stack e-commerce solution with modern design, payment integration, and admin tools.",
  description: [
    "Developed a responsive and user-friendly front end using React and Tailwind CSS, ensuring seamless navigation and fast load times.",
    "Integrated Stripe for secure payment processing and developed an intuitive admin dashboard for managing products, users, and orders.",
    "Focused on optimizing backend performance using Node.js and MongoDB, with secure authentication and efficient API design.",
  ],
  challenges: [
    {
      title: "Handling Secure Payments",
      description:
        "Integrating Stripe API required managing tokenization, edge cases, and payment status handling.",
    },
    {
      title: "Admin Access Control",
      description:
        "Creating a role-based access system that is both secure and flexible for future admin roles.",
    },
    {
      title: "Product Scalability",
      description:
        "Designing the database schema to support thousands of products with efficient querying.",
    },
  ],
  outcome:
    "Successfully launched with over 1,000 products managed via dashboard, and a checkout success rate of 98%.",
  keyFeatures: [
    "Fully responsive UI/UX",
    "Stripe payment gateway",
    "Role-based admin panel",
    "MongoDB aggregation for stats",
    "Real-time order tracking",
  ],
  images: [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop",
  ],
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  category: "Full Stack",
  status: "Completed",
  githubClient: "https://github.com/example/ecommerce-client",
  githubServer: "https://github.com/example/ecommerce-server",
  liveUrl: "https://ecommerce-demo.vercel.app",
  durationInDays: 45,
  isGroupProject: true,
  team: 3,
  stars: 124,
  featured: true,
};

const ProjectSpeceficPage = () => {

  return (
    <div>
      <ProjectDetail project={project} />
    </div>
  );
};

export default ProjectSpeceficPage;
