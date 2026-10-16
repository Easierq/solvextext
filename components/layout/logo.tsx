import { cn } from "@/lib/utils";
import Link from "next/link";

export const Logo = ({ width = "w-[100px]" }) => {
  return (
    <Link href="/" className="inline-block">
      <img src="/lw.png" alt="logo" className={cn("h-auto", width)} />
      {/* <img src="/ly.jpg" alt="logo" className={cn("h-auto", width)} /> */}
    </Link>
  );
};

export const LogoFooter = ({ width = "w-[70px]" }) => {
  return (
    <Link href="/" className="inline-block">
      <img src="/logowhite.png" alt="logo" className={cn("h-auto", width)} />
    </Link>
  );
};
