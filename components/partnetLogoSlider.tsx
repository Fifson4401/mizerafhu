import React from 'react';
import { Image } from "@heroui/image";
import Link from 'next/link';

interface Partner {
  id: number;
  name: string;
  logo: string;
  url?: string;
}

interface PartnerLogosSliderProps {
  partners?: Partner[];
  title?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const defaultPartners: Partner[] = [
  {
    id: 1,
    name: "Cymorek",
    logo: "/images/home/cymorek.webp",
  },
  {
    id: 2,
    name: "INŻ BUD",
    logo: "/images/home/inzbud.webp",
  },
  {
    id: 3,
    name: "KSS WISŁA",
    logo: "/images/home/kss.webp",
  },
  {
    id: 4,
    name: "Lasy Państwowe",
    logo: "/images/home/lasy.webp",
    url: "https://www.lasy.gov.pl/pl"
  },
  {
    id: 5,
    name: "Miasto Wisła",
    logo: "/images/home/wisla.webp",
  }
];

const PartnerLogosSlider: React.FC<PartnerLogosSliderProps> = ({
  partners = defaultPartners,
  title = "Nasi Partnerzy",
  logoWidth = 160,
  logoHeight = 80,
}) => {
  const LogoComponent: React.FC<{ partner: Partner }> = React.memo(({ partner }) => {
    const ImageElement = (
      <Image
        src={partner.logo}
        alt={partner.name}
        className="object-contain transition-opacity duration-300"
        width={logoWidth}
        height={logoHeight}
      />
    );

    if (partner.url) {
      return (
        <Link
          href={partner.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={`block w-[${logoWidth}px] h-[${logoHeight}px] relative`}
        >
          {ImageElement}
        </Link>
      );
    }

    return (
      <div className={`w-[${logoWidth}px] h-[${logoHeight}px] relative`}>
        {ImageElement}
      </div>
    );
  });

  LogoComponent.displayName = 'LogoComponent';

  return (
    <section className="w-full overflow-hidden bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title}
        </h2>

        <div className="relative">
          {/* Gradienty z dodaną opacity */}
          <div className="absolute top-[-2px] left-[-2px] h-[104%] w-[10%] bg-gradient-to-r from-white via-white to-transparent z-30 pointer-events-none" />
          <div className="absolute top-[-2px] right-[-2px] h-[104%] w-[10%] bg-gradient-to-l from-white via-white to-transparent z-30 pointer-events-none" />

          {/* Kontener z logotypami */}
          <div className="relative mx-auto overflow-hidden">
            <div className="flex animate-fade-scroll gap-8 items-center">
              {/* Pierwsza grupa */}
              {partners.map((partner) => (
                <div key={partner.id} className="flex-shrink-0">
                  <LogoComponent partner={partner} />
                </div>
              ))}
              {/* Druga grupa */}
              {partners.map((partner) => (
                <div key={`${partner.id}-duplicate`} className="flex-shrink-0">
                  <LogoComponent partner={partner} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSlider;