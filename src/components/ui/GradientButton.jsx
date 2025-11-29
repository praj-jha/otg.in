import React from "react";
import { cn } from "@/lib/utils";

export const GradientButton = ({ 
  text, 
  variant = "orange", 
  size = "default",
  onClick,
  className = ""
}) => {
  const variants = {
    orange: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    blue: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {text}
    </button>
  );
};

