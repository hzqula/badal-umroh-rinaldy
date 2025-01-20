import React from "react";
import { cn } from "../lib";

const Display = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-5xl font-black tracking-tighter font-kufam",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Display;
