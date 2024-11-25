import { Card } from '@nextui-org/card';
import Image from 'next/image';
import React from 'react';

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface AboutData {
  logo: string;
  title: string;
  description: string;
}

interface CompanyData {
  cards: CardData[];
  about: AboutData;
}

const companyData: CompanyData = {
  cards: [
    {
      id: 1,
      image: '/images/home/square1.webp',
      title: 'Profesjonalizm',
      description: 'Najwyższa jakość usług'
    },
    {
      id: 2,
      image: '/images/home/square2.webp',
      title: 'Doświadczenie',
      description: 'Wieloletnia praktyka'
    },
    {
      id: 3,
      image: '/images/home/square3.webp',
      title: 'Terminowość',
      description: 'Punktualna realizacja'
    },
    {
      id: 4,
      image: '/images/home/square4.webp',
      title: 'Innowacyjność',
      description: 'Nowoczesne rozwiązania'
    }
  ],
  about: {
    logo: '/logo_black.png',
    title: '20 lat doświadczenia',
    description: 'Wieloletnie doświadczenie w branży budowlanej pozwala nam realizować nawet najbardziej wymagające projekty. Każde zlecenie traktujemy indywidualnie, dostosowując nasze usługi do specyficznych potrzeb klienta. Oferujemy atrakcyjne ceny przy zachowaniu najwyższej jakości usług.'
  }
};

interface CompanyCardProps extends Omit<CardData, 'id'> {
  className?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  image,
  title,
  description,
  className = ''
}) => (
  <div className={`w-1/2 p-1 sm:p-2 ${className}`}>
    <Card className="relative h-full overflow-hidden">
      <div className="relative aspect-square max-h-[200px] sm:max-h-[250px] md:max-h-[300px]">
        <Image
          src={image}
          alt=""
          fill
          aria-hidden="true"
          className="object-cover w-full h-full"
          quality={60}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col p-2 sm:p-4 text-white">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-white">{title}</h3>
          <p className="text-center text-sm sm:text-base text-white">{description}</p>
        </div>
      </div>
    </Card>
  </div>
);

interface CompanyProps {
  data?: CompanyData;
  className?: string;
}

const Company: React.FC<CompanyProps> = ({
  data = companyData,
  className = ''
}) => {
  return (
    <section className={`py-8 md:py-16 ${className} bg-white`}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Lewa kolumna */}
          <div className="lg:w-1/2">
            <div className="flex flex-wrap -mx-1 sm:-mx-2">
              {data.cards.map((card) => (
                <CompanyCard
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

          {/* Prawa kolumna */}
          <div className="lg:w-1/2 flex items-center">
            <Card className="w-full">
              <div className="flex flex-col items-center p-4 sm:p-6 md:p-10">
                <Image
                  src={data.about.logo}
                  alt="Logo firmy"
                  width={180}
                  height={120}
                  className="w-28 sm:w-32 md:w-44 h-auto mb-4 sm:mb-6"
                  quality={60}
                />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{data.about.title}</h2>
                <p className="text-center text-gray-600">
                  {data.about.description}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;