import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

export default function TopNav() {
  return (
    <div className="flex items-center justify-center p-12  space-x-10 shadow">
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image
            src="/eagle.png"
            width={100}
            height={100}
            alt="ai image generator logo"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <SignedOut>
          <SignInButton>
            <LogIn className="h-8 w-8 cursor-pointer text-[#6a5acd]" />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
