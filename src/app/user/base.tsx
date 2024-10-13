import React, { ReactNode } from "react";
import Navbar from "@/components/header";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className} mx-auto bg-white grow h-screen`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
