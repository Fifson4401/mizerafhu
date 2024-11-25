import CtaSection from "@/components/cta";
import FAQSection, { FAQItem } from "@/components/faqResources";
import HeaderSection from "@/components/header";
import MaterialsCatalog from "@/components/resources";

export default function MaterialsPage() {
  return (
    <>
      <HeaderSection
        buttonLink="#oferta"
        buttonText="Zobacz Materiały"
        title="Materiały Budowlane i Dekoracyjne"
        subtitle="Wysokiej jakości piasek, kruszywa i materiały ogrodowe"
        description="Oferujemy szeroki wybór materiałów budowlanych i dekoracyjnych, w tym piasek płukany, kruszywa łamane, mieszanki kruszyw oraz materiały ogrodowe. Nasze produkty są idealne do różnorodnych zastosowań budowlanych i ogrodniczych, zapewniając trwałość i estetykę Twoim projektom."
      />
      <MaterialsCatalog aria-labelledby="page-title" />
      <CtaSection
        buttonText="Skontaktuj się z nami"
        description="Potrzebujesz profesjonalnych materiałów budowlanych? Skontaktuj się z nami, aby omówić szczegóły i uzyskać bezpłatną wycenę."
        title="Zaufaj Naszym Materiałom"
      />
      <FAQSection faqItems={faqItems} title="Najczęściej zadawane pytania o materiały budowlane" />
    </>
  );
}

const faqItems: FAQItem[] = [
  // Piasek i kruszywa drobne
  {
    category: "Piasek i kruszywa drobne",
    question: "Jaka jest różnica między piaskiem płukanym a zwykłym piaskiem budowlanym?",
    answer: "Piasek płukany (0-2mm) przechodzi proces oczyszczania z zanieczyszczeń i frakcjonowania, co czyni go idealnym do zapraw murarskich i tynkarskich. Jest czystszy i ma bardziej jednolitą strukturę niż zwykły piasek budowlany. Piasek budowlany szczakowa natomiast zawiera szerszy zakres frakcji (0-4mm) i naturalną domieszkę gliny, co sprawia, że lepiej sprawdza się w wylewkach i jako podsypka pod kostkę brukową, gdzie potrzebna jest lepsza zagęszczalność materiału."
  },
  {
    category: "Piasek i kruszywa drobne",
    question: "Ile piasku potrzebuję na 1m² podsypki pod kostkę brukową?",
    answer: "Na 1m² podsypki pod kostkę brukową potrzebujesz około 0,03-0,05m³ piasku (przy standardowej grubości podsypki 3-5cm). Dla podsypki zalecamy piasek budowlany szczakowa ze względu na jego lepszą zagęszczalność. Warto zamówić około 10% więcej materiału, uwzględniając straty podczas zagęszczania i nierówności podłoża. Przy większych projektach, np. podjazd 50m², będziesz potrzebować około 1,5-2,5m³ piasku."
  },
  {
    category: "Piasek i kruszywa drobne",
    question: "Czy mogę użyć tego samego piasku do murowania i tynkowania?",
    answer: "Tak, piasek płukany 0-2mm jest uniwersalnym wyborem zarówno do murowania jak i tynkowania. Jego drobna, jednorodna struktura zapewnia odpowiednią przyczepność i wytrzymałość zapraw. Do tynków zewnętrznych i wewnętrznych, zapraw murarskich oraz drobnych prac betoniarskich, piasek płukany będzie najlepszym wyborem ze względu na swoją czystość i przewidywalną granulację. Przy pracach tynkarskich zużycie wynosi około 1,5-2kg na 1m² przy grubości tynku 1mm."
  },

  // Kruszywa łamane i kliniec
  {
    category: "Kruszywa łamane i kliniec",
    question: "Jaką grubość warstwy kruszywa zastosować pod podjazd dla samochodów osobowych?",
    answer: "Pod podjazd dla samochodów osobowych zaleca się następujące warstwy: dolna warstwa - tłuczeń 31,5-63mm o grubości 15-20cm, następnie kliniec 16-32mm jako warstwa wyrównująca (8-10cm), a na wierzch kliniec 4-8mm lub 8-16mm jako warstwa klinująca (5-8cm). Całkowita grubość podbudowy powinna wynosić minimum 30cm dla stabilnego podłoża. Każda warstwa powinna być odpowiednio zagęszczona. Taka konstrukcja zapewni odpowiednią nośność i drenaż dla podjazdu."
  },
  {
    category: "Kruszywa łamane i kliniec",
    question: "Które kruszywo najlepiej sprawdzi się do drenażu wokół fundamentów?",
    answer: "Do drenażu wokół fundamentów najlepiej sprawdzi się kliniec 16-32mm lub żwir 16-32mm. Te frakcje zapewniają optymalną przepuszczalność wody przy zachowaniu stabilności warstwy drenażowej. Zalecana szerokość obsypki drenażowej to minimum 50cm, a grubość warstwy powinna wynosić około 30-40cm. Dodatkowo, warto użyć geowłókniny do oddzielenia warstwy drenażowej od gruntu rodzimego, co zapobiegnie jej zamulaniu i wydłuży skuteczność drenażu."
  },
  {
    category: "Kruszywa łamane i kliniec",
    question: "Co to jest kliniec i do czego się go stosuje w budownictwie?",
    answer: "Kliniec to kruszywo łamane o różnych frakcjach (4-8mm, 8-16mm, 16-32mm), powstające przez mechaniczne kruszenie skał. Główne zastosowania klińca to: wykonywanie podbudów drogowych (gdzie mniejsze frakcje wypełniają przestrzenie między większymi, tworząc stabilną warstwę), warstwy wyrównujące i klinujące pod kostką brukową, drenaże oraz stabilizacja gruntu. Kliniec 4-8mm szczególnie dobrze sprawdza się jako warstwa wykończeniowa, podczas gdy większe frakcje (16-32mm) są idealne do głębszych warstw konstrukcyjnych."
  },

  // Mieszanki i materiały konstrukcyjne
  {
    category: "Mieszanki i materiały konstrukcyjne",
    question: "Czym różni się mieszanka 0-31mm od 0-63mm i którą wybrać?",
    answer: "Mieszanka 0-31mm zawiera kruszywa o mniejszym maksymalnym uziarnieniu, co czyni ją idealną do górnych warstw podbudowy i jako warstwa wyrównująca. Jest łatwiejsza w obróbce i zagęszczaniu, dając przy tym gładszą powierzchnię końcową. Mieszanka 0-63mm natomiast, zawierająca większe frakcje, lepiej sprawdza się w dolnych warstwach podbudowy, gdzie potrzebna jest większa nośność. Do podjazdów domowych zazwyczaj wystarcza mieszanka 0-31mm (warstwa 15-20cm), ale przy większych obciążeniach warto zastosować najpierw warstwę mieszanki 0-63mm (20cm), a na niej 0-31mm (10cm)."
  },
  {
    category: "Mieszanki i materiały konstrukcyjne",
    question: "Jakie są zalety stosowania mieszanek kruszyw zamiast pojedynczych frakcji?",
    answer: "Mieszanki kruszyw oferują kilka kluczowych zalet: 1) Lepszą zagęszczalność dzięki optymalnemu uziarnieniu, gdzie mniejsze ziarna wypełniają przestrzenie między większymi, 2) Niższe koszty wykonania podbudowy, gdyż nie trzeba układać osobnych warstw różnych frakcji, 3) Szybszą realizację prac - jedna warstwa zamiast kilku, 4) Lepszą stabilność warstwy konstrukcyjnej dzięki zróżnicowanemu uziarnieniu. Mieszanka 0-31mm jest szczególnie popularna w małych projektach budowlanych, oferując dobry kompromis między łatwością układania a właściwościami konstrukcyjnymi."
  },
  {
    category: "Mieszanki i materiały konstrukcyjne",
    question: "Ile kosztuje wykonanie podbudowy z mieszanki kruszywa na 100m²?",
    answer: "Koszt wykonania podbudowy z mieszanki kruszywa na 100m² zależy od grubości warstwy i rodzaju mieszanki. Przy standardowej grubości 20cm potrzebujesz około 20-22m³ mieszanki (uwzględniając zagęszczenie). Ceny mieszanek wahają się w zależności od regionu i dostępności materiału. Do kosztów materiału należy doliczyć transport i robociznę. Warto uwzględnić też koszt zagęszczarki i geowłókniny, jeśli podłoże tego wymaga. Całkowity koszt może być niższy niż przy stosowaniu osobnych warstw różnych frakcji kruszywa."
  },

  // Materiały ogrodowe i dekoracyjne
  {
    category: "Materiały ogrodowe i dekoracyjne",
    question: "Jak przygotować podłoże pod trawnik z wykorzystaniem ziemi przesiewanej?",
    answer: "Przygotowanie podłoża pod trawnik z użyciem ziemi przesiewanej wymaga kilku kroków: 1) Usunięcie starej trawy i chwastów, 2) Przekopanie podłoża na głębokość 15-20cm, 3) Rozłożenie warstwy ziemi przesiewanej o grubości 10-15cm, 4) Wyrównanie i lekkie zagęszczenie powierzchni. Na 100m² trawnika potrzeba około 10-15m³ ziemi przesiewanej. Najlepszy termin wykonania tych prac to wczesna wiosna lub wczesna jesień. Ziemia przesiewana zapewnia odpowiednią strukturę i napowietrzenie dla korzeni trawy."
  },
  {
    category: "Materiały ogrodowe i dekoracyjne",
    question: "Czy kora kamienna wymaga specjalnej pielęgnacji po ułożeniu?",
    answer: "Kora kamienna to materiał praktycznie bezobsługowy. Po ułożeniu warstwy o grubości 3-5cm nie wymaga szczególnej pielęgnacji. Zaleca się jedynie: 1) Usuwanie ewentualnych chwastów, które mogą wyrosnąć między kamieniami, 2) Okresowe spłukiwanie z pyłu dla odświeżenia koloru, 3) Uzupełnianie ubytków co 2-3 lata. Przed ułożeniem warto zastosować agrowłókninę pod korę kamienną, co znacznie ograniczy wzrost chwastów i utrzyma czystość aranżacji. Materiał jest trwały i nie wymaga sezonowej wymiany jak tradycyjna kora."
  },
  {
    category: "Materiały ogrodowe i dekoracyjne",
    question: "Jaka jest trwałość kamieni ozdobnych w ogrodzie?",
    answer: "Kamienie ozdobne w ogrodzie są jednym z najbardziej trwałych elementów dekoracyjnych, mogących służyć przez dziesiątki lat bez utraty właściwości estetycznych. Ich trwałość zależy od: 1) Jakości materiału - naturalne kamienie są bardziej odporne na warunki atmosferyczne, 2) Prawidłowego ułożenia na stabilnym podłożu, 3) Zastosowania agrowłókniny pod kamieniami. Kamienie nie wymagają specjalnej konserwacji, są odporne na mróz i promienie UV. Mogą wymagać okresowego czyszczenia z mchów w zacienionych miejscach."
  }
];
