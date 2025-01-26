import Company from "@/components/company";
import CtaSection from "@/components/cta";
import Hero from "@/components/hero";
import PartnerLogosSlider from "@/components/partnetLogoSlider";
import Tiles from "@/components/tiles";

export default function Home() {
  return (
    <>
      <Hero
        imageUrl="/images/home/home_hero.webp"
        imageAlt="Plac budowy z ciężarówkami"
        title="Roboty ziemne, kruszywa i szybki transport"
        description={<>Zbudujmy razem <span className="text-[#0c0c0c] font-extrabold">Twoją</span> przyszłość! Profesjonalne usługi budowlane na terenie Wisły i okolic.</>}
        isButton={true}
        buttonText="Dzwonię od razu!"
      />
      <Tiles />
      <Company />
      <PartnerLogosSlider />
      <CtaSection
        title="Potrzebujesz Profesjonalnych Usług Budowlanych?"
        description="Skontaktuj się z nami już dziś, aby omówić szczegóły swojego projektu. Oferujemy bezpłatne wyceny oraz doradztwo na każdym etapie budowy."
        buttonText="Skontaktuj się z nami"
      />
    </>
  );
}
