import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px",
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, isInView };
};

export const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
  hiddenLeft: { opacity: 0, x: -50 },
  visibleLeft: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
  hiddenRight: { opacity: 0, x: 50 },
  visibleRight: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
  hiddenScale: { opacity: 0, scale: 0.8 },
  visibleScale: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
}; 