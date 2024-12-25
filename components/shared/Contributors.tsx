"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ahmed Faisal",
    designation: "Software Engineer",
    image:
      "https://avatars.githubusercontent.com/u/105755473?v=4",
  },
  {
    id: 2,
    name: "Mazin",
    designation: "Product Manager",
    image:
      "https://www.databayt.org/_next/image?url=%2Fcontributor%2Fseedon.jpg&w=96&q=75",
  },
  {
    id: 3,
    name: "Ahmed Faisal",
    designation: "Data Scientist",
    image:
      "https://avatars.githubusercontent.com/u/105755473?v=4",
  },
  {
    id: 4,
    name: "Osman",
    designation: "UX Designer",
    image:
      "https://www.databayt.org/_next/image?url=%2Fcontributor%2Fabdout.jpg&w=96&q=75",
  },
  {
    id: 5,
    name: "Ahmed",
    designation: "Soap Developer",
    image:
      "https://www.databayt.org/_next/image?url=%2Fcontributor%2Fmazin.jpg&w=96&q=75",
  },
  {
    id: 6,
    name: "Mohammed",
    designation: "The Explorer",
    image:
      "https://www.databayt.org/_next/image?url=%2Fcontributor%2Fseedon.jpg&w=96&q=75",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
