"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generatePrompt } from "@/lib/gemini";
import React, { useState } from "react";
import Header from "../_components/Header";

const PreparePage = () => {
  const [jobDescription, setJobDescription] = useState("");
  const submitHandler = async () => {
    console.log("submitting");
    const questions = await generatePrompt(jobDescription);
    console.log(questions);
  };
  return (
    <div className="">
      <div className="mx-auto flex flex-col gap-4">
        <Label htmlFor="job_description" className="text-xl font-semibold">
          Enter the job description
        </Label>
        <Textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          id="job_description"
        />
        <Button variant={"ghost"} onClick={submitHandler}>Prepare</Button>
      </div>
    </div>
  );
};

export default PreparePage;
