"use client";

import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import Box from "@/components/Box"
import SidebarItem from "./SidebarItem";
import { BiSearch } from "react-icons/bi";
import Library from "./Library";

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Search',
      href: '/search',
      active: pathname === '/search'
    },
  ], [pathname]);


  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col bg-black h-full w-[300px] gap-y-2  p-2">
        <Box><div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div></Box>
        <Box className="overflow-y-auto h-full"><Library /></Box>
      </div>
      <main className="overflow-y-auto h-full flex-1 py-2"> {children}</main>
    </div>
  );
};

export default Sidebar;
