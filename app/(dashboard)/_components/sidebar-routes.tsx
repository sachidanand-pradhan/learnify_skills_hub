"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    herf: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    herf: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    herf: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    herf: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.herf}
          icon={route.icon}
          label={route.label}
          herf={route.herf}
        />
      ))}
    </div>
  );
};
