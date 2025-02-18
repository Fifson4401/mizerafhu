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
    company: "F.h.u. Mizera",
    phones: ["+48606976126", "+48600549105"],
    email: "kontakt@ztmizera.pl",
    address: {
      street: "Ul. Dębowa 9",
      city: "Wisła",
      postcode: "43-460",
    },
    additionalAddress: "Ul. Ustrońska 22a",
    nip: "5481240096",
    socialMedia: {
      facebook: "https://facebook.com/firma",
      linkedin: "https://linkedin.com/firma",
      instagram: "https://instagram.com/firma",
    },
  },
  logoBlackPath: "/logo_black.png",
  logoWhitePath: "/logo_white.png",
};
