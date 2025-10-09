import { useState, useEffect } from "react";

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isIpad: boolean;
  orientation: "portrait" | "landscape";
  screenWidth: number;
  screenHeight: number;
}

export const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isIpad: false,
    orientation: "portrait",
    screenWidth: 0,
    screenHeight: 0,
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Detectar iPad
      const isIpad =
        /iPad|Macintosh/.test(navigator.userAgent) &&
        "ontouchend" in document &&
        width >= 768 &&
        width <= 1024;

      // Detectar dispositivos móveis
      const isMobile = width < 768;

      // Detectar tablets (incluindo iPad)
      const isTablet = (width >= 768 && width <= 1024) || isIpad;

      // Detectar orientação
      const orientation = width > height ? "landscape" : "portrait";

      setDeviceInfo({
        isMobile,
        isTablet,
        isIpad,
        orientation,
        screenWidth: width,
        screenHeight: height,
      });
    };

    // Detectar na inicialização
    detectDevice();

    // Detectar mudanças de tamanho
    window.addEventListener("resize", detectDevice);

    // Detectar mudanças de orientação
    window.addEventListener("orientationchange", detectDevice);

    return () => {
      window.removeEventListener("resize", detectDevice);
      window.removeEventListener("orientationchange", detectDevice);
    };
  }, []);

  return deviceInfo;
};

// Hook específico para iPad
export const useIsIpad = (): boolean => {
  const { isIpad } = useDeviceDetection();
  return isIpad;
};

// Hook para orientação
export const useOrientation = (): "portrait" | "landscape" => {
  const { orientation } = useDeviceDetection();
  return orientation;
};

// Hook para breakpoints responsivos
export const useResponsiveBreakpoint = (): "mobile" | "tablet" | "desktop" => {
  const { isMobile, isTablet } = useDeviceDetection();

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  return "desktop";
};
