"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { sidebarRoutes } from "@/utils/constant/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profileImg from "../../public/IMG_20250524_165515.jpg";

export function StunningSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-68 h-screen bg-gray-900/50 backdrop-blur-sm border-r border-gray-800/30 flex flex-col">
      {/* Header */}
      <Link href="/" className="p-6 border-b border-gray-800/30">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              className="w-12 h-12 rounded-full object-cover"
              src={profileImg}
              alt="profile"
              width={50}
              height={50}
            />
          </motion.div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-100">
              Montasir Mihad
            </h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </motion.div>
      </Link>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-1">
        {sidebarRoutes.map((route, index) => {
          const isActive = pathname === route.url;
          return (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={route.url}
                className={`
                  relative group block px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer
                  ${
                    isActive
                      ? "bg-gray-800/60 text-gray-100"
                      : "text-gray-400 hover:bg-gray-800/30 hover:text-gray-200"
                  }
                `}
              >
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`
                      w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200
                      ${
                        isActive
                          ? "bg-gray-700 text-gray-100"
                          : "bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-gray-200"
                      }
                    `}
                  >
                    <route.icon className="w-4 h-4" />
                  </motion.div>

                  {/* Text content */}
                  <div className="flex flex-col flex-1">
                    <span className="font-medium text-sm">{route.title}</span>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gray-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom user section */}
      <div className="p-4">
        <motion.div
          className="p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">
                Admin User
              </span>
              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
