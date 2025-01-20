import React from "react";
import { cn } from "../lib";

const Paragraph = ({ children, className }) => {
  return (
    <p className={cn("w-4/5 text-sm leading-tight tracking-tight", className)}>
      {children}
    </p>
  );
};

export default Paragraph;
