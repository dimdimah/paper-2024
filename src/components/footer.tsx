import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow bottom-0 left-0 right-0 w-full">
      <div className="w-full mx-auto p-4 md:py-8 px-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image src="" width={40} height={40} alt="Logo" className="h-8" />
            <span className="ml-2 text-xl font-bold text-gray-700 dark:text-white">
              YourBrand
            </span>
          </Link>

          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline mr-4 md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline mr-4 md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline mr-4 md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            YourBrand™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
