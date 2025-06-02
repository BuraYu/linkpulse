"use client";

import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
        setIsMobile(false);
      } else {
        setIsSidebarOpen(false);
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isMobile={isMobile}
      />
      <main
        className={`flex-1 transition-all duration-300 pt-8 ${
          isSidebarOpen && !isMobile ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
