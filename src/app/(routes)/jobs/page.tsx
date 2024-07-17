"use client";

import React from "react";
import JobListItem from "./_components/JobListItem";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-4">
      <h2 className=" text-4xl font-semibold">Search for jobs</h2>
      <div className="flex flex-row justify-end items-center gap-2">
        <span>Sort by</span>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Recommended" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="cst">Recommended</SelectItem>
              <SelectItem value="est">Most recent</SelectItem>
              <SelectItem value="est">Highly Pay</SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        <JobListItem />
        <JobListItem />
        <JobListItem />
        <JobListItem />
      </div>
    </div>
  );
};

export default page;
