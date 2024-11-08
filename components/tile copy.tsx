import React from 'react';
import { Card, CardBody } from '@nextui-org/card';
import Link from 'next/link';

interface TileProps {
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
}

const Tile: React.FC<TileProps> = ({
  title,
  description,
  backgroundImage,
  link,
}) => {
  return (
    <Link href={link} passHref className="block max-w-[300px] w-full mx-auto group">
      <Card
        isPressable
        isHoverable
        className="relative flex items-center justify-center text-center w-full aspect-square overflow-hidden transform transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#ffffffdf] transition-colors duration-300 group-hover:bg-[#f9f9f9]"></div>
        <CardBody className="relative flex flex-col items-center justify-center">
          <p className="text-xl font-bold">{title}</p>
          <p className="mt-2 text-center">{description}</p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Tile;
