'use client'

import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from 'next/image';


export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  title: string;
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqItems }) => {
  // Grupowanie elementów według kategorii
  const groupedItems = faqItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {title}
        </h2>

        {Object.entries(groupedItems).map(([category, items], categoryIndex) => (
          <div key={category} className="mb-6">
            <div className="py-3 px-4 bg-[#211a1e] font-semibold mb-2 rounded-lg text-white">
              {category}
            </div>

            <Accordion
              selectionMode="multiple"
              itemClasses={{
                base: "w-full",
                title: "text-xl font-medium",
                trigger: "px-2 md:px-4 py-4 flex flex-row-reverse",
                content: "px-4 md:px-8",
                subtitle: "text-base text-gray-600",
              }}
            >
              {items.map((item, itemIndex) => (
                <AccordionItem
                  key={`${categoryIndex}-${itemIndex}`}
                  title={item.question}
                  classNames={{
                    base: "group-data-[hover=true]:bg-gray-100",
                    content: "text-gray-600",
                    title: "font-normal"
                  }}
                  indicator={() => <Image
                    src={'/icons/home/arrow.svg'}
                    alt="Icon"
                    width={14}
                    height={14}
                  />}
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
