"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="mx-auto md:px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href="/" className="text-2xl font-semibold mx-4">
              Brand
            </Link>
          </div>
          <div>
            <div className="hidden md:flex space-x-8 text-xl">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-500 text-xl"
              >
                Home
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-500">
                About
              </Link>
              <Link href="/" className="text-gray-700 hover:text-gray-500">
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu}>
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" onClick={toggleMenu}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-500"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
