import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between mx-auto max-w-7xl px-4 py-5">
      <Link href="/" className="font-bold text-3xl">
        Blog<span className="text-primary font-extrabold">XD</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}