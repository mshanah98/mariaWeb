import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

type ComponentProps = {
  className?: string;
  children: ReactNode;
};

export const Card: React.FC<ComponentProps> = ({ className = "", children }) => {
  return (
    <div className={cn("bg-white rounded-2xl shadow-lg overflow-hidden p-4", className)}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<ComponentProps> = ({ className = "", children }) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

export const Button: React.FC<ComponentProps> = ({ className = "", children }) => {
  return (
    <button className={cn("w-full py-2 mt-2 bg-[#A67B5B] text-white font-bold rounded-lg", className)}>
      {children}
    </button>
  );
};
