import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  icon,
  fullWidth = false,
  type = "button",
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    secondary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 focus:ring-blue-500 hover:shadow-lg transform hover:-translate-y-1",
    ghost: "text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button; 