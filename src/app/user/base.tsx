import React, { ReactNode } from "react";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className} mx-auto bg-white grow`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
