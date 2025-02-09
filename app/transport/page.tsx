import CtaSection from "@/components/cta";
import FAQSection, { FAQItem } from "@/components/faqResources";
import HeaderSection from "@/components/header";
import Services, { ServicesData } from "@/components/services";

export default function TransportPage() {
  return (
    <>
      <HeaderSection
        buttonLink="#oferta"
        buttonText="Sprawdź ofertę"
        title="Transport i Logistyka Materiałów Budowlanych"
        subtitle="Profesjonalne usługi transportowe dla Twojej budowy"
        description="Terminowe dostawy, które wspierają płynność prac budowlanych. Dbamy o bezpieczny transport wszystkich materiałów, minimalizując ryzyko uszkodzeń. Dopasowujemy nasze usługi do indywidualnych potrzeb klienta, niezależnie od wielkości zlecenia."
      />
      <Services data={servicesTransport} />
      <CtaSection
        buttonText="Skontaktuj się z nami"
        description="Potrzebujesz niezawodnego transportu materiałów budowlanych? Skontaktuj się z nami, aby omówić szczegóły i uzyskać bezpłatną wycenę."
        title="Skorzystaj z naszych usług transportowych"
      />
      {/* <FAQSection
        faqItems={faqItems}
        title="Najczęściej zadawane pytania o transport i logistykę materiałów"
      /> */}
    </>
  );
}


const faqItems: FAQItem[] = [
  // Transport i logistyka
  {
    category: "Transport i logistyka materiałów",
    question: "Jaką ilość materiału może przewieźć wywrotka 4x4 w jednym kursie?",
    answer: "Wywrotka 4x4 może przewieźć następujące ilości materiałów w jednym kursie: 1) Piasek płukany lub budowlany: 8-10m³, 2) Kruszywa łamane (tłuczeń, kliniec): 6-8m³, 3) Mieszanki kruszyw: 7-9m³, 4) Żwiry: 7-8m³, 5) Ziemia przesiewana: 8-9m³. Pojemność może się różnić w zależności od wilgotności i zagęszczenia materiału. Ta wywrotka jest idealna do dostaw w trudno dostępnych miejscach dzięki napędowi 4x4."
  },
  {
    category: "Transport i logistyka materiałów",
    question: "Jakie są możliwości transportowe wywrotki 6x6 26.5t?",
    answer: "Wywrotka 6x6 26.5t oferuje następującą ładowność dla różnych materiałów: 1) Piasek: 16-18m³, 2) Kruszywa łamane: 14-16m³, 3) Mieszanki: 15-17m³, 4) Kamienie gabionowe: 12-14m³. Pojazd wymaga: minimum 3.5m szerokości drogi, 4m wysokości przejazdowej i odpowiedniej nośności podłoża. W przypadku trudnego dojazdu oferujemy alternatywne rozwiązania z wykorzystaniem mniejszego sprzętu."
  },
  {
    category: "Transport i logistyka materiałów",
    question: "Jak skalkulować ilość kursów potrzebnych do dostawy materiałów na budowę?",
    answer: "Kalkulacja ilości kursów zależy od rodzaju materiału i projektu. Przykładowo: 1) Dla podjazdu 100m² z podbudową 30cm: około 2-3 kursy wywrotką 6x6 lub 4-5 kursów 4x4, 2) Dla trawnika 200m² z 15cm warstwą ziemi: około 2 kursy wywrotką 6x6, 3) Pod kostkę brukową 50m²: 1 kurs wywrotką 4x4 na podsypkę. Zawsze warto zamówić około 5-10% więcej materiału na ewentualne straty i nierówności terenu."
  },
  {
    category: "Transport i logistyka materiałów",
    question: "Od czego zależy koszt transportu materiałów i jak jest kalkulowany?",
    answer: "Koszt transportu materiałów zależy od: 1) Odległości dostawy - podstawowa stawka plus dodatkowa opłata za każdy kilometr, 2) Rodzaju użytego pojazdu - wywrotka 6x6 ma wyższą stawkę niż 4x4, 3) Ilości kursów - przy większych zamówieniach oferujemy atrakcyjne stawki, 4) Dostępności miejsca rozładunku - trudny dojazd może wymagać użycia dodatkowego sprzętu, 5) Czasu rozładunku - standardowo wliczony jest rozładunek do 15 minut."
  },
  {
    category: "Transport i logistyka materiałów",
    question: "Jakie są możliwości rozładunku materiałów w trudno dostępnych miejscach?",
    answer: "Oferujemy różne rozwiązania dla trudno dostępnych miejsc: 1) Wykorzystanie wywrotki 4x4 z możliwością precyzyjnego manewrowania, 2) Rozładunek z większej wywrotki 6x6 w dostępnym miejscu i transport mniejszym sprzętem na miejsce docelowe, 3) Możliwość wysypu materiału w pryzmy lub rozłożenia go na większej powierzchni dzięki funkcji samowyładowczej, 4) W szczególnych przypadkach możemy zorganizować dodatkowy sprzęt do przemieszczania materiału na miejscu budowy."
  },
  {
    category: "Transport i logistyka materiałów",
    question: "Czy dostępny jest transport łączony różnych materiałów?",
    answer: "Tak, oferujemy transport łączony z następującymi możliwościami: 1) Dostawę różnych frakcji kruszyw w ramach jednego transportu (np. tłuczeń i kliniec na podbudowę), 2) Kombinację materiałów budowlanych i ogrodowych (np. piasek pod kostkę i ziemia pod trawnik), 3) Transport mniejszych ilości różnych materiałów jednym kursem dla optymalizacji kosztów. Ważne jest wcześniejsze uzgodnienie takiego transportu ze względu na konieczność odpowiedniego zaplanowania załadunku."
  }
];

const servicesTransport: ServicesData = {
  title: 'Nasze Usługi Transportu i Logistyki Materiałów',
  cards: [
    {
      id: 1,
      image: '/images/home/square1.webp',
      title: 'Samochody 3.5t, 14t, 28t oraz 40t',
      description: 'Oferujemy transport materiałów budowlanych samochodami 6x6 i 4x4, zapewniając wysoką ładowność oraz dostępność w trudno dostępnych miejscach. Gwarantujemy szybkie i bezpieczne dostawy na plac budowy. Dla większych zleceń używamy ciągników z naczepami 40t.'
    },
    {
      id: 2,
      image: '/images/home/square2.webp',
      title: 'Usługi HDS',
      description: 'Zapewniamy profesjonalne usługi HDS (Hydrauliczny Dźwig Samochodowy) do podnoszenia i transportu ciężkich materiałów na placu budowy. Nasze HDS są niezawodne i przystosowane do różnych zadań logistycznych.'
    },
  ]
};