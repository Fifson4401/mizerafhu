import { Button } from "@heroui/button";
import Link from "next/link";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string; // Opcjonalny link dla przycisku
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink = "/kontakt", // Domyślny link, jeśli nie zostanie podany
}) => {
  return (
    <div className="w-full min-h-[400px] py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="relative w-full sm:max-w-4xl mx-auto rounded-2xl bg-white shadow-2xl overflow-hidden">
          {/* Główna zawartość */}
          <div className="relative z-10">
            <div className="px-10 sm:px-6 md:px-12 py-8 md:py-12">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
                  {title}
                </h2>

                <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto">
                  {description}
                </p>

                <div className="flex justify-center pt-4">
                  {buttonLink ? (
                    <Link href={buttonLink} aria-label={buttonText}>
                      <Button
                        size="lg"
                        className="bg-[#FFAF01] font-semibold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF01] focus:outline-none"
                      >
                        {buttonText}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      size="lg"
                      className="bg-[#FFAF01] font-semibold shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAF01] focus:outline-none"
                    >
                      {buttonText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
