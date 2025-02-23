import { Button } from "@heroui/button";
import Link from "next/link";

interface HeaderSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <header className="text-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-white forced-color-none">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-normal mb-4 sm:mb-6 forced-color-none">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold  mb-4">
          {subtitle}
        </h2>
      )}
      <p className="mt-10 mb-6 sm:mb-10 max-w-prose mx-auto text-sm sm:text-base text-gray-700 leading-tight">
        {description}
      </p>
      <Link href={buttonLink} aria-label={buttonText}>
        <Button
          size="lg"
          className="bg-[#FFAF01] hover:bg-[#E69E00] font-bold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF01] focus:outline-none forced-color-none"
        >
          {buttonText}
        </Button>
      </Link>
    </header>
  );
};

export default HeaderSection;
