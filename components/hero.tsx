import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';

const Hero = () => {
  return (
    <section className="relative w-full mb-4 z-10 min-h-[500px]"> {/* Dodano min-h */}
      <Image
        src="/images/home/home_hero.webp"
        alt="Plac budowy z ciężarówkami"
        width="100%"
        height="auto"
        className="block object-cover min-h-[500px] max-h-[700px] shadow-custom-inset" // Zmieniono min-h i max-h na px
        removeWrapper
        radius="none"
      />

      {/* Gradient na dole */}
      <div
        aria-hidden
        className="absolute bottom-[-1px] left-0 w-full h-[25%] bg-gradient-to-b from-transparent to-[#ededed] z-10"
      />
      {/* Treść nagłówka */}
      <div className='absolute w-full h-full top-0 mx-auto justify-center'>
        <div
          className="
          absolute z-20 bg-[#edededef] rounded-xl
          p-4 sm:p-6 md:p-8
          top-[10%] sm:top-[15%] md:top-[20%] lg:top-[30%]
          mx-6 md:mx-8 lg:mx-0
          w-[calc(100%-48px)] sm:w-[calc(100%-96px)] md:w-auto
          max-w-full md:max-w-[60%] lg:max-w-[45%]
          right-0 md:right-[5%]
          transition-all duration-300
        "
        >
          <header>
            <h1 className="
            text-[#343434] font-extrabold mb-5
            text-2xl sm:text-3xl 
            leading-snug sm:leading-tight md:leading-snug lg:leading-tight
          ">
              Roboty ziemne, kruszywa i{' '}szybki transport
            </h1>
            <h2 className="
            text-[#343434] font-medium mb-8
            text-base sm:text-lg
            leading-normal sm:leading-relaxed md:leading-normal lg:leading-relaxed
          ">
              Zbudujmy razem <span className='text-[#d71728] font-extrabold'>Twoją</span> przyszłość! Profesjonalne usługi budowlane na terenie Wisły i okolic.
            </h2>
            <Button size='lg' className='bg-[#FFAF01] font-bold'>Dzwonię od razu!</Button>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Hero;
