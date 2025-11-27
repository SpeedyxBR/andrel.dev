import { useEffect, useCallback } from "react";

// Tipos para eventos do Google Analytics
interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface AnalyticsPageView {
  page_title: string;
  page_location: string;
  page_path: string;
}

export const useAnalytics = () => {
  const isGtagAvailable = typeof window !== "undefined" && (window as any).gtag;

  const trackEvent = useCallback(
    (event: AnalyticsEvent) => {
      if (isGtagAvailable) {
        (window as any).gtag("event", event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
        });
      } else {
        console.warn("Google Analytics não está disponível");
      }
    },
    [isGtagAvailable]
  );

  const trackPageView = useCallback(
    (pageData: AnalyticsPageView) => {
      if (isGtagAvailable) {
        (window as any).gtag("event", "page_view", pageData);
      } else {
        console.warn("Google Analytics não está disponível");
      }
    },
    [isGtagAvailable]
  );

  const trackOutboundLink = useCallback(
    (url: string, linkText?: string) => {
      trackEvent({
        action: "click",
        category: "outbound-link",
        label: `${linkText} (${url})`,
      });
    },
    [trackEvent]
  );

  const trackDownload = useCallback(
    (fileName: string, fileType?: string) => {
      trackEvent({
        action: "download",
        category: "file",
        label: `${fileName}.${fileType || "pdf"}`,
      });
    },
    [trackEvent]
  );

  const trackSocialInteraction = useCallback(
    (platform: string, action: string) => {
      trackEvent({
        action,
        category: "social",
        label: platform,
      });
    },
    [trackEvent]
  );

  const trackError = useCallback(
    (error: Error, errorInfo?: any) => {
      trackEvent({
        action: "exception",
        category: "error",
        label: error.message,
      });
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    trackOutboundLink,
    trackDownload,
    trackSocialInteraction,
    trackError,
    isGtagAvailable,
  };
};
