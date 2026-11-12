import { LogoAcrobat } from "@gravity-ui/icons";
import { Link, Button } from "@heroui/react";

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <LogoAcrobat />
      <p className="font-bold">ACME</p>
    </div>
    <ul className="flex items-center gap-4">
    <Button> <li><Link href="/auth/signin">Sign In</Link></li></Button>
    <Button> <li><Link href="/auth/signup">Sign Up</Link></li></Button>
 
    </ul>
  </header>
</nav>
        </div>
    );
};

export default Navbar;