import React from "react";
import { motion } from "framer-motion";

interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  variant?: "spinner" | "dots" | "pulse" | "bars";
  className?: string;
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = "md",
  color = "text-blue-600",
  variant = "spinner",
  className = "",
  text,
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const SpinnerLoader = () => (
    <motion.div
      className={`${sizes[size]} ${color} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );

  const DotsLoader = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizes[size].split(" ")[0]} ${color.replace(
            "text-",
            "bg-"
          )}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const PulseLoader = () => (
    <motion.div
      className={`${sizes[size]} ${color.replace(
        "text-",
        "bg-"
      )} rounded-full ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const BarsLoader = () => (
    <div className={`flex space-x-1 items-end ${className}`}>
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={`w-2 ${color.replace("text-", "bg-")} rounded-sm`}
          animate={{
            height: ["8px", "32px", "8px"],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return <DotsLoader />;
      case "pulse":
        return <PulseLoader />;
      case "bars":
        return <BarsLoader />;
      default:
        return <SpinnerLoader />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {renderLoader()}
      {text && (
        <motion.p
          className={`text-sm ${color} mt-2`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Loading;
