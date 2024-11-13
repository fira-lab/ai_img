import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between p-5 shadow">
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
      <div className="flex item-center space-x-2">
        <Button>Login</Button>
      </div>
    </div>
  );
}
