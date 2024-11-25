import { Button } from "@nextui-org/button";
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
    <header className="text-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-normal mb-4 sm:mb-6">
        {title}
        {subtitle && <span className="block mt-2">{subtitle}</span>}
      </h1>
      <p className="mb-6 sm:mb-10 max-w-prose mx-auto text-base sm:text-lg text-gray-700">
        {description}
      </p>
      <Link href={buttonLink} aria-label={buttonText}>
        <Button
          size="lg"
          className="bg-[#FFAF01] hover:bg-[#E69E00] font-bold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF01] focus:outline-none"
        >
          {buttonText}
        </Button>
      </Link>
    </header>
  );
};

export default HeaderSection;
