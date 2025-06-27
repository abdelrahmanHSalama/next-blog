"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const handlePrevious = () => {};

const Pagination = ({
  pages = 5,
  className,
}: {
  pages: number;
  className: string;
}) => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handlePrevious = () => {
    if (selectedButton === 1) return;
    setSelectedButton((prev) => prev - 1);
  };

  const handleNext = () => {
    if (selectedButton === pages) return;
    setSelectedButton((prev) => prev + 1);
  };

  return (
    <div className={`flex justify-between ${className}`}>
      <button
        className="flex items-center gap-1 text-[#667085] border-b border-transparent hover:border-[#667085] transition-border duration-250 cursor-pointer"
        onClick={handlePrevious}
      >
        <Icon icon="lucide:arrow-left" />
        Previous
      </button>
      <div>
        {Array.from({ length: pages }, (_, i) => (
          <button
            className={`mx-4 text-[#667085] w-10 h-10 rounded cursor-pointer hover:bg-[#F9F5FF] transition-all duration-250 ${
              selectedButton === i + 1 ? "bg-[#F9F5FF]" : ""
            }`}
            key={i}
            onClick={() => setSelectedButton(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-1 text-[#667085] border-b border-transparent hover:border-[#667085] transition-border duration-250 cursor-pointer"
        onClick={handleNext}
      >
        Next <Icon icon="lucide:arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;
