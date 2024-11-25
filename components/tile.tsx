import React from 'react';
import { Card, CardBody } from '@nextui-org/card';
import Link from 'next/link';
import Image from 'next/image';

interface TileProps {
  title: string;
  description: string;
  link: string;
  svgPath?: string;
  size?: number;
}

const Tile: React.FC<TileProps> = ({
  title,
  description,
  link,
  svgPath,
  size = 60,
}) => {
  return (
    <Link
      href={link}
      className="block w-full relative group"
    >
      <div className="relative transform transition-transform duration-300 sm:group-hover:scale-105">
        <Card
          isPressable
          className="relative flex items-center justify-center text-center w-full h-[240px] md:h-[280px] overflow-hidden bg-white hover:bg-opacity-80"
        >
          <div className="absolute top-0 left-0 w-full h-2 sm:h-1 bg-[#fbe349] sm:bg-[#2A2E45] transition-all duration-150 ease-linear sm:group-hover:bg-[#fbe349] sm:group-hover:h-2" />

          <div className="absolute bottom-0 left-0 right-0 h-[20px] overflow-hidden">
            <Image
              src="/images/home/stripes.webp"
              alt="Stripes"
              fill
              className="object-cover"
              quality={100}
            />

            <div
              className="absolute inset-0 grayscale opacity-0 sm:opacity-100 transition-all duration-300 ease-in-out sm:group-hover:opacity-0"
              style={{
                maskImage: 'linear-gradient(to right, white, white)',
                WebkitMaskImage: 'linear-gradient(to right, white, white)',
              }}
            >
              <Image
                src="/images/home/stripes.webp"
                alt="Stripes"
                fill
                className="object-cover"
                quality={100}
              />
              <div
                className="absolute top-0 h-full animate-stripe-slide-slow opacity-0 sm:opacity-100 transition-all duration-300 ease-in-out sm:group-hover:opacity-0"
                style={{
                  width: '30%',
                  background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.3), transparent)',
                  maskImage: 'linear-gradient(to right, transparent, white, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, white, transparent)',
                }}
              />
            </div>
          </div>

          <CardBody className="relative flex flex-col items-center justify-center p-3 md:p-5">
            {svgPath && (
              <div className="mb-3 md:mb-5">
                <Image
                  src={svgPath}
                  alt="Icon"
                  width={size}
                  height={size}
                  className="object-contain w-10 h-10 md:w-14 md:h-14"
                />
              </div>
            )}
            <h3 className="text-base md:text-lg font-bold mb-2">{title}</h3>
            <p className="text-xs md:text-sm text-center break-words hyphens-auto max-w-[90%]">{description}</p>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
};

export default Tile;