import React from "react";
import { cn } from "../lib";

const SubTitle = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "w-4/5 text-base sm:text-lg font-semibold mb-2 tracking-tight text-center",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
