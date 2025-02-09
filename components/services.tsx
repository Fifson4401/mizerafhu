'use client';

import React from 'react';
import { Card } from "@heroui/card";
import Image from 'next/image';

export interface CardData {
  id: number;
  image: string;
  title: string;
  description?: string;
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
  <article className="w-full sm:w-[calc(50%-1rem)] p-2">
    <Card className="relative h-full overflow-hidden">
      <div className="relative aspect-square max-h-[300px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
          quality={60}
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col p-4 text-white">
          <h3 className="text-lg md:text-xl font-medium mb-6 text-center">
            {title}
          </h3>
          {description && (
            <p className="text-sm md:text-base text-center">
              {description}
            </p>
          )}
        </div>
      </div>
    </Card>
  </article>
);

interface ServicesProps {
  data: ServicesData;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <section
      className="py-8 md:py-12 bg-white"
      id='oferta'
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2
          id="services-title"
          className="text-xl md:text-2xl font-semibold mb-8 text-center"
        >
          {data.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
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