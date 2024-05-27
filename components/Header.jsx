import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Text */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            MJ_4<span className="text-accent">0</span>9
          </h1>
        </Link>

        {/* Navbar for PC */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Navbar for Mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
