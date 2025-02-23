'use client'

import React from 'react';
import { Card, CardBody } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from 'next/image';
import Rock from './rock';

interface MaterialItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface CategoryData {
  id: number;
  title: string;
  description: string;
  items: MaterialItem[];
}

interface MaterialsData {
  [key: string]: CategoryData;
}

interface MaterialCardProps extends MaterialItem {
  className?: string;
  categoryId: number;
}

const materialsData = {
  "piaskowe": {
    id: 1,
    title: "Materiały piaskowe",
    description: "Podstawowe materiały używane w budownictwie do zapraw, wylewek i podsypek",
    items: [
      {
        title: "Piasek płukany 0-2 (siwy)",
        description: "Idealny do zapraw murarskich, tynkarskich oraz betonów. Charakteryzuje się wysoką czystością i brakiem zanieczyszczeń.",
        image: "/images/materials/piasek.webp",
        imageAlt: "Drobnoziarnisty piasek o ziarnach wielkości główki od szpilki (0-2mm). Na szerokości kciuka (20mm) mieści się około 100 ziaren."
      },
      {
        title: "Piasek budowlany szczakowa (żółty)",
        description: "Stosowany do tynkowania i murowania. Świetnie sprawdza się jako wypełnienie piaskownic.",
        image: "/images/materials/piasek2.jpg",
        imageAlt: "Żółty piasek o zróżnicowanej granulacji, pojedyncze ziarna wielkości od główki szpilki do 1/4 szerokości paznokcia (0-4mm)."
      }
    ]
  },
  "kruszywa": {
    id: 2,
    title: "Kruszywa łamane",
    description: "Materiały stosowane w budownictwie drogowym i konstrukcyjnym",
    items: [
      {
        title: "Tłuczeń 31.5-63mm",
        description: "Wykorzystywany do podbudów dróg i placów. Zapewnia stabilne podłoże.",
        image: "/images/materials/tluczen31-63.jpeg",
        imageAlt: "Kamienie o wielkości od szerokości kciuka (31.5mm) do szerokości czterech palców ułożonych obok siebie (63mm)."
      },
      {
        title: "Kliniec 4-8mm",
        description: "Idealny do klinowania większych frakcji kruszywa i wykonywania cieńszych warstw podbudowy.",
        image: "/images/materials/kliniec4.jpg",

        imageAlt: "Drobne kamyki wielkości od ziarna grochu (4mm) do szerokości połowy małego palca (8mm)."
      },
      {
        title: "Kliniec 8-16mm",
        description: "Stosowany do wykonywania podbudów drogowych i stabilizacji gruntu.",
        image: "/images/materials/kliniec16.jpg",

        imageAlt: "Kamienie o wielkości od szerokości połowy małego palca (8mm) do szerokości palca wskazującego (16mm)."
      },
      {
        title: "Kliniec 16-32mm",
        description: "Używany do wykonywania grubszych warstw podbudowy.",
        image: "/images/materials/kliniec32.jpg",

        imageAlt: "Kamienie o wielkości od szerokości palca wskazującego (16mm) do szerokości dwóch palców ułożonych obok siebie (32mm)."
      }
    ]
  },
  "mieszanki": {
    id: 3,
    title: "Mieszanki kruszyw",
    description: "Gotowe mieszanki do zastosowań konstrukcyjnych i drogowych",
    items: [
      {
        title: "Mieszanka 0-63mm",
        description: "Uniwersalna mieszanka do wykonywania podbudów dróg i placów.",
        image: "/images/materials/mieszanka0-63.jpg",

        imageAlt: "Zróżnicowana mieszanka kruszywa od drobnego piasku (jak główka szpilki) do kamieni wielkości czterech palców ułożonych obok siebie (63mm)."
      },
      {
        title: "Mieszanka 0-31mm",
        description: "Idealna do wykonywania górnych warstw podbudowy i utwardzania powierzchni.",
        image: "/images/materials/mieszanka0-31.webp",

        imageAlt: "Mieszanka materiału od drobnego piasku do kamieni wielkości szerokości kciuka (31mm), z przewagą średnich frakcji."
      }
    ]
  },
  "zwiry": {
    id: 4,
    title: "Żwiry",
    description: "Naturalne kruszywa do różnorodnych zastosowań budowlanych",
    items: [
      {
        title: "Żwir 8-16mm",
        description: "Stosowany do produkcji betonu i jako materiał drenarski.",
        image: "/images/materials/zwir8-16.webp",

        imageAlt: "Zaokrąglone kamyki wielkości od małego palca (8mm) do szerokości palca wskazującego (16mm)."
      },
      {
        title: "Żwir 16-32mm",
        description: "Używany do drenażu i jako kruszywo do betonu konstrukcyjnego.",
        image: "/images/materials/zwir16-32.webp",

        imageAlt: "Okrągłe kamienie wielkości od palca wskazującego (16mm) do szerokości dwóch palców ułożonych obok siebie (32mm)."
      }
    ]
  },
  "ogrodowe": {
    id: 5,
    title: "Materiały ogrodowe",
    description: "Produkty do aranżacji terenów zielonych",
    items: [
      {
        title: "Kora kamienna",
        description: "Dekoracyjne wykończenie rabat i ścieżek ogrodowych.",
        image: "/images/materials/korakamienna11-32.jpg",

        imageAlt: "Płaskie kamienie dekoracyjne o wielkości od paznokcia kciuka do szerokości całej dłoni (20-100mm), w różnych odcieniach."
      },
      {
        title: "Przesiewana ziemia",
        description: "Wysokiej jakości podłoże do zakładania ogrodów i trawników.",
        image: "/images/materials/przesiewziemia.webp",

        imageAlt: "Drobna, przesiana ziemia o konsystencji drobnego piasku, z widocznymi cząstkami organicznymi wielkości ziaren maku."
      }
    ]
  },
  "kamienie": {
    id: 6,
    title: "Kamienie gabionowe i ozdobne",
    description: "Materiały do budowy konstrukcji gabionowych i dekoracji",
    items: [
      {
        title: "Kamień 63-180 (do gabionów)",
        description: "Wykorzystywany do wypełniania koszy gabionowych i tworzenia murów oporowych.",
        image: "/images/materials/gabion.jpg",

        imageAlt: "Duże kamienie od szerokości czterech palców ułożonych obok siebie (63mm) do szerokości całej dłoni (180mm)."
      },
      {
        title: "Kamień 120-350",
        description: "Do budowy większych konstrukcji gabionowych i umocnień skarp.",
        image: "/images/materials/gabion.jpg",

        imageAlt: "Bardzo duże kamienie od szerokości sześciu palców ułożonych obok siebie (120mm) do wielkości dwóch dłoni ułożonych obok siebie (350mm)."
      }
    ]
  },
  "konstrukcyjne": {
    id: 7,
    title: "Elementy konstrukcyjne",
    description: "Prefabrykowane elementy budowlane",
    items: [
      {
        title: "Podmurówki do ogrodzeń",
        description: "Gotowe elementy betonowe do montażu ogrodzeń.",
        image: "/images/materials/podmurowka.jpg",

        imageAlt: "Betonowe elementy podmurówki o wysokości szerokości dłoni (około 100mm) i długości pięciu dłoni ułożonych obok siebie (około 700mm)."
      }
    ]
  }
};

const MaterialCard: React.FC<MaterialCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  categoryId
}) => (
  <article
    className="w-full"
    role="article"
    aria-labelledby={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}
  >
    <Card>
      <CardBody className="p-0">
        <div className="relative w-full aspect-video">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            role="img"
            loading={categoryId === 1 ? "eager" : "lazy"}
          />
        </div>
        <div className="p-4">
          <h3
            id={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-lg font-semibold mb-2"
          >
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardBody>
    </Card>
  </article>
);

const MaterialsCatalog = () => {
  return (
    <main
      className="w-full pt-8 md:pt-16 forced-color-none"
      role="main"
      aria-label="Katalog materiałów budowlanych"
      id='oferta'
    >
      <div className="container mx-auto px-4 max-w-7xl forced-color-none" >
        <div className="relative forced-color-none">
          {/* Lewe elementy */}
          <Rock imageUrl='rock3.webp' style={{ left: '15%' }} />
          <Rock imageUrl='rock5.webp' style={{ left: '35%' }} />

          {/* Prawe elementy */}
          <Rock imageUrl='rock6.webp' style={{ right: '15%' }} isRight />
          <Rock imageUrl='rock8.webp' style={{ right: '35%' }} isRight />

          <h2 className='text-5xl text-center font-semibold mb-20 relative z-10 forced-color-none'>Oferta</h2>
        </div>

        <Accordion
          variant="shadow"
          selectionMode="multiple"
          className="mb-8 [&>div]:border-black forced-color-none"
          itemClasses={{
            base: "w-full",
            title: "text-xl font-medium",
            trigger: "px-4 md:px-8 py-4 flex flex-row-reverse gap-x-10",
            content: "px-4 md:px-8",
            subtitle: "text-base text-gray-600",
          }}
          dividerProps={{ className: 'bg-[#211a1e5a]' }}
          defaultExpandedKeys={'1'}


        >
          {Object.entries(materialsData).map(([key, category]) => (
            <AccordionItem
              key={category.id}
              aria-label={`Kategoria: ${category.title}`}
              title={category.title}
              subtitle={category.description}
              indicator={() => <Image
                src={'/icons/home/arrow.svg'}
                alt="Icon"
                width={20}
                height={20}
              />}
              HeadingComponent="h3"
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-4"
                role="list"
                aria-label={`Lista produktów w kategorii ${category.title}`}
              >
                {category.items.map((item, index) => (
                  <div
                    key={`${category.id}-${index}`}
                    role="listitem"
                  >
                    <MaterialCard
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      imageAlt={item.imageAlt}
                      categoryId={category.id}
                    />
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main >
  );
};

export default MaterialsCatalog;