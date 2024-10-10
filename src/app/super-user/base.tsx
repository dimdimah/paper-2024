import React, { ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Sidebar from "@/components/sidebar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  const roleName = localStorage.getItem("role_name");

  return (
    <div className="flex">
      <div className="h-screen overflow-auto text-white w-60">
        <Sidebar />
      </div>
      <div
        className={`${className} container w-3/4 mx-auto bg-white grow h-screen px-5`}
      >
        <div className="flex justify-end mx-auto my-8">
          <Button className="flex items-center justify-between gap-2">
            <p>Admin</p>
            <UserButton afterSignOutUrl="/" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
