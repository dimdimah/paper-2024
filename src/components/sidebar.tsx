import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default async function sidebar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-black">
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col gap-2">
        <div className="flex items-center justify-center my-4">
          <p>Logo</p>
        </div>
        <div className="flex flex-col gap-2 my-3">
          <Link
            href="/super-user/dashboard"
            className={buttonVariants({ variant: "outline" })}
          >
            Dashboard
          </Link>
          <Link
            href="/super-user/product"
            className={buttonVariants({ variant: "outline" })}
          >
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
