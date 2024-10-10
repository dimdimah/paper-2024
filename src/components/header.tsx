import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Header() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="bg-white text-gray-900">
      <div className="flex items-center justify-end py-4 px-4">
        <div>
          <div className="flex gap-4 items-center">
            <Link href="/">Home</Link>
            <Link href="/sign-up">Sign up</Link>
            <Link href="/sign-in">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
