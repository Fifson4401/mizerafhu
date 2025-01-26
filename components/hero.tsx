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
    <section className="relative w-full mb-4 z-10 min-h-[500px]">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width="100%"
        height="auto"
        className="block object-cover min-h-[500px] max-h-[700px] shadow-custom-inset"
        removeWrapper
        radius="none"
      />

      {/* Gradient na dole */}
      <div
        aria-hidden
        className="absolute bottom-[-1px] left-0 w-full h-[25%] bg-gradient-to-b from-transparent to-[#ededed] z-10"
      />
      {/* Treść nagłówka */}
      <div className='absolute w-full h-full top-0'>
        <div className="container mx-auto px-6 sm:px-4 h-full relative">
          <div
            className="
            absolute z-20 bg-[#edededef] rounded-xl
            p-6 md:p-8
            top-[10%] sm:top-[15%] md:top-[20%] lg:top-[30%]
            w-full sm:w-auto
            max-w-full md:max-w-[60%] lg:max-w-[45%]
            right-0 md:right-[1.8%]
            transition-all duration-300
          "
          >
            <header className="px-4 sm:px-0">
              <h1 className="
                text-[#343434] font-extrabold
                text-2xl sm:text-3xl 
                leading-snug sm:leading-tight md:leading-snug lg:leading-tight
              ">
                {title}
              </h1>
              {!!description && <h2 className="
                text-[#343434] font-medium mt-5 mb-8
                text-base sm:text-lg
                leading-normal sm:leading-relaxed md:leading-normal lg:leading-relaxed
              ">
                {description}
              </h2>}
              {isButton && (
                <Link href="/kontakt">
                  <Button
                    size='lg'
                    className='bg-[#FFAF01] font-bold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5'
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