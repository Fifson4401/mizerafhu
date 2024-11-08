import React from 'react';
import { Card, CardBody } from '@nextui-org/card';
import Link from 'next/link';
import Image from 'next/image';

interface TileProps {
  title: string;
  description: string;
  link: string;
  svgPath?: string; // Nowy prop do przyjmowania ścieżki do SVG
  size?: number;
}

const Tile: React.FC<TileProps> = ({
  title,
  description,
  link,
  svgPath,
  size = 60
}) => {
  return (
    <Link href={link} passHref className="block max-w-[300px] w-full mx-auto relative group">
      <div className="relative transform transition-transform duration-300 group-hover:scale-105">
        <Card
          isPressable
          className="relative flex items-center justify-center text-center w-full aspect-square overflow-hidden bg-[#ffffff] hover:bg-[#ffffffa4]"
        >
          {/* Górny border z animacją zmiany koloru */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#2A2E45] transition-all duration-150 ease-linear group-hover:bg-[#fbe349] group-hover:h-2"></div>

          {/* Dekoracyjny pasek na dole kafelka z Image */}
          <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-yellow-500 overflow-hidden">
            <Image
              src="/images/home/stripes.webp"
              alt="Stripes"
              fill
              className="object-cover filter grayscale transition-all duration-300 ease-in-out group-hover:filter-none"
              quality={100}
            />
          </div>

          {/* Treść kafelka */}
          <CardBody className="relative flex flex-col items-center justify-center px-6">
            {/* Ikona SVG załadowana z pliku */}
            {svgPath && (
              <div className="mb-10">
                <Image
                  src={svgPath}
                  alt="Icon"
                  width={size}
                  height={size}
                  className="object-contain"
                />
              </div>
            )}
            <p className="text-xl font-bold">{title}</p>
            <p className="mt-2 text-center">{description}</p>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
};

export default Tile;
