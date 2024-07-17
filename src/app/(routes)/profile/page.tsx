"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-4">
      <h2 className=" text-4xl font-semibold">Edit your profile</h2>
      <div className="flex flex-row gap-2 border-b border-b-gray-400 w-fit">
        <Link
          href={"/applied"}
          className={cn(
            "py-2 px-4",
            pathname.includes("/applied") && "border-b border-b-black"
          )}
        >
          Overview
        </Link>
        <Link
          href={"/applied/rejected"}
          className={cn(
            "py-2 px-4",
            pathname.includes("/applied/rejected") && "border-b border-b-black"
          )}
        >
          Profile
        </Link>
        <Link
          href={"/applied/accepted"}
          className={cn(
            "py-2 px-4",
            pathname.includes("/applied/accepted" && "border-b border-b-black")
          )}
        >
          Resume / CV
        </Link>
      </div>
    </div>
  );
};

export default page;
