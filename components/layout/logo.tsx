import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ width = "w-[100px]" }) => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/lw.svg"
        alt="logo"
        width={100}
        height={40}
        className={cn("h-auto", width)}
      />
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
