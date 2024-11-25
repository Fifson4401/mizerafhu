// site.config.ts

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mizera | Roboty ziemne, kruszywa, transport",
  description:
    "Oferujemy najwyższej jakości kruszywa oraz kompleksowe usługi w zakresie robót ziemnych. Skontaktuj się z nami, aby omówić Twój projekt.",
  navItems: [
    {
      label: "Kruszywa",
      href: "/kruszywa",
    },
    {
      label: "Roboty Ziemne",
      href: "/roboty-ziemne",
    },
    {
      label: "Transport",
      href: "/transport",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
  ],
  navMenuItems: [
    {
      label: "Kruszywa",
      href: "/kruszywa",
    },
    {
      label: "Roboty Ziemne",
      href: "/roboty-ziemne",
    },
    {
      label: "Transport",
      href: "/transport",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
  ],
  links: {
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
  contact: {
    company: "F.h.u. mizera", // Dodana nazwa firmy
    phone: "+48123456789",
    email: "kontakt@firma.pl",
    address: {
      street: "Ul. dębową 9", // Zaktualizowany adres
      city: "Wisła",
      postcode: "43-460",
    },
    additionalAddress: "Ul. ustronska 22a", // Dodany dodatkowy adres
    nip: "5481240096", // Dodany numer NIP
    socialMedia: {
      facebook: "https://facebook.com/firma",
      linkedin: "https://linkedin.com/firma",
      instagram: "https://instagram.com/firma",
    },
  },
  logoBlackPath: "/logo_black.png",
  logoWhitePath: "/logo_white.png",
};
