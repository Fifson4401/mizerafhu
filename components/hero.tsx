import React from 'react';
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import Link from 'next/link';

interface HeroProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description?: React.ReactNode;
  isButton?: boolean;
  buttonText?: string;
}

const Hero: React.FC<HeroProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  isButton = true,
  buttonText = "Dzwonię od razu!"
}) => {
  return (
    <section
      className="relative w-full mb-4 z-10 min-h-[500px]"
      role="banner"
      aria-labelledby="hero-title"
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width="100%"
        height="auto"
        className="block object-cover min-h-[500px] max-h-[700px] shadow-custom-inset"
        removeWrapper
        radius="none"
      />

      <div
        aria-hidden
        className="absolute bottom-[-1px] left-0 w-full h-[25%] bg-gradient-to-b from-transparent to-[#ededed] z-10"
      />

      <div className='absolute w-full h-full top-0'>
        <div className="container mx-auto px-4 h-full relative">
          <div className="
            absolute z-20 bg-[#edededef] rounded-xl
            p-4 md:p-6 lg:p-8
            top-[10%] sm:top-[15%] md:top-[20%] lg:top-[30%]
            w-[calc(100%-2rem)] sm:w-auto
            max-w-full md:max-w-[60%] lg:max-w-[45%]
            right-4 md:right-[1.8%]
            transition-all duration-300 forced-color-none
          ">
            <header className="px-4 sm:px-0 forced-color-none">
              <h1
                id="hero-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#343434] leading-snug forced-color-none"
              >
                {title}
              </h1>

              {!!description && (
                <p className="text-sm sm:text-base lg:text-lg font-normal text-[#343434] mt-5 mb-8 leading-normal forced-color-none">
                  {description}
                </p>
              )}

              {isButton && (
                <Link href="/kontakt" aria-label={buttonText}>
                  <Button
                    size='lg'
                    className='bg-[#FFAF01] font-bold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF01] forced-color-none'
                  >
                    {buttonText}
                  </Button>
                </Link>
              )}
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;