import React from "react";
import { cn } from "../lib";

const CardParagraph = ({ children, className }) => {
  return (
    <p className={cn("w-4/5 text-xs leading-tight tracking-tight", className)}>
      {children}
    </p>
  );
};

export default CardParagraph;
