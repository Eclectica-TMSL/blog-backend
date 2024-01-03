"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full relative flex items-center justify-between mx-auto max-w-7xl px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Blog<span className="text-primary font-extrabold">XD</span>
      </Link>
      <div className="flex justify-between gap-5 items-center">
        {pathname !== "/submit-blog" && (
          <Link href="/submit-blog">
            <Button>Submit a blog</Button>
          </Link>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}