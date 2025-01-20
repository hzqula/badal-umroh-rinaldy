import React from "react";
import { cn } from "../lib";

const Title = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-3xl font-extrabold tracking-tighter font-kufam",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
