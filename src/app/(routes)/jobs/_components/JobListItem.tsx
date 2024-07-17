import Image from "next/image";
import React from "react";
import CompanyImage from "../../../../../public/company.jpg";
import {
  DotIcon,
  LineChart,
  MapPin,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const JobListItem = () => {
  return (
    <div className="bg-[#fafcff] border border-gray-300 rounded-md overflow-hidden p-4 flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Image
          alt="company-image"
          width={60}
          height={60}
          src={CompanyImage}
          className="border border-gray-300 rounded-md"
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold">Doxel.ai</h3>
          <span className="text-sm font-normal">
            Continuous performance monitoring and predictive insights to stay
            one step ahead of delays
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row items-center gap-2">
          <UsersRound className="size-5" />
          <span className="font-medium">50-100 employees</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MapPin className="size-5" />
          <span className="font-medium">San Francisco, CA</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <JobRow />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <UserRoundPlus className="size-5" />
          <span className="font-semibold">Applicants - </span>
          <span>100+</span>
        </div>
        <div className="flex flex-row gap-4">
          <Button variant={"outline"} className="py-0">
            View more
          </Button>
          <Button className="px-8 bg-blue-600 hover:bg-blue-800">Apply</Button>
        </div>
      </div>
    </div>
  );
};

export default JobListItem;

function JobRow() {
  return (
    <div className="py-2 px-4 border bg-white border-gray-300 rounded-sm flex flex-row items-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <span className="font-semibold text-sm">
            Senior Software Engineer
          </span>
          <div className="flex flex-row items-center gap-1">
            <DotIcon color="#9e9e9e" />
            <span className="text-sm font-normal text-gray-500">
              $100k-$200k
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <DotIcon color="#9e9e9e" />
            <span className="text-sm font-normal text-gray-500">
              Brazil, USA, India, Remote
            </span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <DotIcon color="#9e9e9e" />
            <span className="text-sm font-normal text-gray-500">
              Min Experience -{" "}
            </span>
            <span className="text-sm font-normal text-gray-500">2.5 years</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="">Skills</span>
          <div className="flex flex-row gap-2 flex-wrap">
            <SkillsBadge label="HTML" />
            <SkillsBadge label="CSS" />
            <SkillsBadge label="Javascript" />
            <SkillsBadge label="ReactJS" />
            <SkillsBadge label="NodeJS" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsBadge({ label }: { label: string }) {
  return (
    <div className=" text-sm rounded-md border border-gray-300 w-fit py-1 px-2 bg-white">
      {label}
    </div>
  );
}
