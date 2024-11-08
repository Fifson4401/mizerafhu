import Tile from "@/components/tile";

export default function Tiles() {
  return (
    <section className="relative mt-[-5rem] z-30">
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          <Tile
            title="Roboty ziemne"
            description="Wykopy, niwelacja terenu, utrzymanie zimowe i{' '}utwardzanie dróg, wyburzenia"
            link="/podstrona1"
            svgPath='/icons/home/excavator.svg'
          />
          <Tile
            title="Kruszywa"
            description="Towary sypkie, kamienie pod budowe, gabiony, utwardzenia"
            link="/podstrona2"
            svgPath='/icons/home/rock.svg'

          />
          <Tile
            title="Transport"
            description="Wywrotki 6x6 i{' '}4x4, HDS, ciężarówki samozałodowawcze"
            link="/podstrona3"
            svgPath='/icons/home/lorry.svg'
            size={70}
          />
        </div>
      </div>
    </section>
  );
}
