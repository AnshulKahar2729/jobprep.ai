import Image from "next/image";
import React from "react";
import CompanyImage from "../../../../../public/company.jpg";

const JobList = () => {
  return (
    <div className="bg-[#FEFFFF] border border-gray-300">
      <Image alt="company-image" width={100} height={100} src={CompanyImage} />
      JOb
    </div>
  );
};

export default JobList;
