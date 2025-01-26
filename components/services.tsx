'use client';

import React from 'react';
import { Card } from "@heroui/card";
import Image from 'next/image';

export interface CardData {
  id: number;
  image: string;
  title: string;
  description?: string; // Opcjonalny opis
}

export interface ServicesData {
  title: string;
  cards: CardData[];
}

interface ServiceCardProps {
  image: string;
  title: string;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => (
  <div className="w-full sm:w-2/5 p-2">
    <Card className="relative h-full overflow-hidden">
      <div className="relative aspect-square max-h-[200px] sm:max-h-[250px] md:max-h-[300px]">
        <Image
          src={image}
          alt={title}
          fill
          aria-hidden="true"
          className="object-cover w-full h-full"
          quality={60}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col p-2 sm:p-4 text-white">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-center">
            {title}
          </h3>
          {description && (
            <p className="text-center text-sm sm:text-base">{description}</p>
          )}
        </div>
      </div>
    </Card>
  </div>
);

interface ServicesProps {
  data: ServicesData;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section className="py-8 md:py-16 bg-white" id='oferta'>
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{data.title}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {data.cards.map((card) => (
            <ServiceCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
