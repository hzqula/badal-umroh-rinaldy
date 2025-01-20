import React from "react";
import { cn } from "../lib";

const CardParagraph = ({ children, className }) => {
  return (
    <p
      className={cn(
        "w-4/5 text-xs sm:text-sm leading-tight tracking-tight text-center",
        className
      )}
    >
      {children}
    </p>
  );
};

export default CardParagraph;
