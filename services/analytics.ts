interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  user_ip?: string;
  [key: string]: any;
}

export const trackEvent = (eventName: string, params: AnalyticsEvent) => {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("event", eventName, params);
  }
};

export const trackPhoneReveal = (userIP?: string) => {
  trackEvent("phone_number_reveal", {
    event_category: "engagement",
    event_label: "phone_number",
    ...(userIP && { user_ip: userIP }),
  });
};

// Przykładowe dodatkowe eventy, które możesz dodać w przyszłości:
// export const trackEmailClick = (userIP?: string) => {
//   trackEvent("email_click", {
//     event_category: "engagement",
//     event_label: "email",
//     ...(userIP && { user_ip: userIP }),
//   });
// };

// export const trackSocialClick = (platform: string, userIP?: string) => {
//   trackEvent("social_click", {
//     event_category: "engagement",
//     event_label: platform,
//     ...(userIP && { user_ip: userIP }),
//   });
// };
