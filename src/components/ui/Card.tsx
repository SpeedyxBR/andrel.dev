import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  darkMode?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  darkMode = false,
  hover = true,
  onClick,
}) => {
  const baseClasses = `rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`;
  
  const hoverClasses = hover ? "hover:shadow-xl transform hover:-translate-y-1" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 