import CtaSection from "@/components/cta";
import FAQSection, { FAQItem } from "@/components/faqResources";
import HeaderSection from "@/components/header";
import Services, { ServicesData } from "@/components/services";

export default function EarthWorksPage() {
  return (
    <>
      <HeaderSection
        buttonLink="#oferta"
        buttonText="Sprawdź ofertę"
        title="Profesjonalne Roboty Ziemne"
        subtitle="Kompleksowe usługi ziemne dla Twojej inwestycji"
        description="Oferujemy szeroki zakres usług związanych z robotami ziemnymi, w tym wykopy pod fundamenty, utwardzanie dróg, niwelację terenu oraz zimowe utrzymanie dróg. Nasz doświadczony zespół i nowoczesny sprzęt zapewniają wysoką jakość i terminowość realizacji każdego projektu."
      />
      <Services data={servicesEarthworks} />
      <CtaSection
        buttonText="Skontaktuj się z nami"
        description="Potrzebujesz profesjonalnych usług ziemnych? Skontaktuj się z nami, aby omówić szczegóły i uzyskać bezpłatną wycenę."
        title="Zaufaj Naszym Ekspertom"
      />
      <FAQSection faqItems={faqItems} title="Najczęściej zadawane pytania o roboty ziemne i wykopy" />
    </>
  );
}

const faqItems: FAQItem[] = [
  {
    category: "Roboty ziemne i wykopy",
    question: "Jakie są możliwości i wydajność koparki kołowej przy wykopach pod fundamenty?",
    answer: "Koparka kołowa oferuje następującą wydajność przy wykopach: 1) Wykop pod dom jednorodzinny (100m²): około 1-2 dni roboczych, 2) Wykopy liniowe pod przyłącza: 50-100mb dziennie zależnie od głębokości, 3) Szerokość łyżki: 30-90cm - idealna do precyzyjnych wykopów fundamentowych, 4) Głębokość kopania: do 4m. Maszyna świetnie sprawdza się na utwardzonym terenie i ma możliwość szybkiego przemieszczania się między stanowiskami pracy. Dzięki kołom zamiast gąsienic nie niszczy istniejących nawierzchni."
  },
  {
    category: "Roboty ziemne i wykopy",
    question: "Co obejmuje usługa kompleksowych robót ziemnych przy budowie domu?",
    answer: "Kompleksowe roboty ziemne przy budowie domu obejmują: 1) Przygotowanie terenu i zdjęcie humusu z jego późniejszym zagospodarowaniem, 2) Wykopy pod fundamenty z precyzyjnym wypoziomowaniem dna, 3) Wykopy pod przyłącza mediów (woda, prąd, kanalizacja), 4) Zasypywanie fundamentów z zagęszczeniem gruntu, 5) Formowanie spadków terenu i przygotowanie pod dalsze prace. Całość prac jest realizowana z użyciem specjalistycznego sprzętu (koparka kołowa, koparko-ładowarka) i uwzględnia prawidłowe odwodnienie wykopów oraz zabezpieczenie ścian w głębszych wykopach."
  },
  {
    category: "Roboty ziemne i wykopy",
    question: "W jaki sposób realizowane jest utwardzanie dróg dojazdowych i placów?",
    answer: "Proces utwardzania dróg i placów przebiega etapowo: 1) Korytowanie terenu na głębokość 30-40cm, 2) Profilowanie podłoża ze spadkami dla odprowadzenia wody, 3) Układanie warstw konstrukcyjnych: tłuczeń 31.5-63mm (20cm), następnie mieszanka 0-31mm (10cm), 4) Zagęszczanie każdej warstwy, 5) Opcjonalne wykończenie powierzchni klińcem 4-8mm. Używamy koparko-ładowarki do korytowania i rozkładania materiału oraz specjalistycznego sprzętu do zagęszczania. Prace uwzględniają wykonanie odpowiednich spadków i systemu odwodnienia."
  },
  {
    category: "Roboty ziemne i wykopy",
    question: "Jakie usługi obejmuje zimowe utrzymanie dróg i placów?",
    answer: "Zimowe utrzymanie dróg i placów obejmuje kompleksową obsługę: 1) Odśnieżanie z użyciem pługu przedniego zamontowanego na koparko-ładowarce - szerokość robocza do 2.8m, 2) Posypywanie mieszanką piaskowo-solną lub samym piaskiem w zależności od potrzeb, 3) Usuwanie oblodzeń i zabezpieczanie nawierzchni przed śliskością, 4) Wywóz nadmiaru śniegu w przypadku intensywnych opadów, 5) Stały monitoring warunków pogodowych i gotowość do akcji 24/7. Oferujemy zarówno jednorazowe usługi jak i stałe umowy na cały sezon zimowy."
  },
  {
    category: "Roboty ziemne i wykopy",
    question: "Jakie są możliwości koparko-ładowarki w pracach porządkowych i niwelacji terenu?",
    answer: "Koparko-ładowarka to uniwersalna maszyna oferująca szerokie możliwości: 1) Niwelacja terenu z dokładnością do 10cm, 2) Załadunek i transport materiałów - pojemność łyżki przedniej do 1.2m³, 3) Karczowanie małych pni i krzewów, 4) Rozściełanie ziemi i kruszyw - szerokość robocza łyżki do 2.4m, 5) Zbieranie i przemieszczanie materiałów sypkich. Maszyna jest szczególnie efektywna przy pracach wymagających mobilności i różnorodnych czynności, np. przy porządkowaniu działek czy przygotowaniu terenu pod inwestycje."
  },
  {
    category: "Roboty ziemne i wykopy",
    question: "Jak wygląda wycena i realizacja większych projektów ziemnych?",
    answer: "Proces wyceny i realizacji większych projektów ziemnych obejmuje: 1) Bezpłatne oględziny terenu i konsultację co do zakresu prac, 2) Szczegółową wycenę uwzględniającą: ilość roboczogodzin sprzętu, potrzebne materiały (kruszywa, piasek), wywóz nadmiaru ziemi, 3) Harmonogram prac z uwzględnieniem warunków pogodowych, 4) Koordynację z innymi ekipami na budowie (np. ekipą od fundamentów), 5) Dokumentację fotograficzną przed i po realizacji. Dla dużych projektów oferujemy możliwość etapowania prac i elastyczne formy rozliczenia."
  }
];

const servicesEarthworks: ServicesData = {
  title: 'Nasze Usługi z Zakresu Robót Ziemnych',
  cards: [
    {
      id: 1,
      image: '/images/home/square1.webp',
      title: 'Kompleksowe Roboty Ziemne',
      description: 'Oferujemy pełen zakres usług ziemnych, w tym wykopy pod fundamenty, przygotowanie terenu budowy, wyburzenia oraz niwelację terenu. Nasze usługi są realizowane przy użyciu nowoczesnych maszyn, zapewniając precyzję i efektywność.'
    },
    {
      id: 2,
      image: '/images/home/square2.webp',
      title: 'Zimowe Utrzymanie Dróg',
      description: 'Zapewniamy profesjonalne zimowe utrzymanie dróg i placów, obejmujące odśnieżanie, posypywanie solą lub piaskiem, usuwanie oblodzeń oraz monitoring warunków pogodowych. Gwarantujemy bezpieczne i dostępne drogi przez cały sezon zimowy.'
    },
    {
      id: 3,
      image: '/images/home/square3.webp',
      title: 'Utwardzanie Podłóg i Dróg',
      description: 'Specjalizujemy się w utwardzaniu podłóg oraz dróg, wykorzystując wysokiej jakości materiały i nowoczesny sprzęt. Realizujemy projekty zarówno dla inwestycji komercyjnych, jak i prywatnych, zapewniając trwałość i wytrzymałość nawierzchni.'
    },
    {
      id: 4,
      image: '/images/home/square4.webp',
      title: 'Niwelacje Terenu i Wyburzenia',
      description: 'Oferujemy precyzyjną niwelację terenu oraz profesjonalne usługi wyburzeniowe. Nasze rozwiązania pozwalają na optymalne przygotowanie terenu pod budowę oraz bezpieczne i efektywne wyburzenie istniejących struktur.'
    },
  ]
};
