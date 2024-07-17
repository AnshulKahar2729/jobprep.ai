"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-4">
      <h2 className=" text-4xl font-semibold">Applications</h2>
      <div className="flex flex-row gap-2">
        <Link
          href={"/applied"}
          className={cn(
            "py-2 px-4",
            pathname.includes("/applied") && "border-b border-b-black"
          )}
        >
          Ongoing
        </Link>
        <Link
          href={"/applied/rejected"}
          className={cn(
            "py-2 px-4",
            pathname.includes("/applied/rejected") && "border-b border-b-black"
          )}
        >
          Rejected
        </Link>
        <Link
          href={"/applied/accepted"}
          className={cn(
            "py-2 px-4",
            pathname.includes("/applied/accepted" && "border-b border-b-black")
          )}
        >
          Accepted
        </Link>
      </div>
    </div>
  );
};

export default Page;
