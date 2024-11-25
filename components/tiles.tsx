import Tile from "@/components/tile";

export default function Tiles() {
  const tilesData = [
    {
      title: "Roboty ziemne",
      description: "Wykopy, niwelacja terenu, utrzymanie zimowe i utwardzanie dróg, wyburzenia",
      link: "/podstrona1",
      svgPath: '/icons/home/excavator.svg'
    },
    {
      title: "Kruszywa",
      description: "Towary sypkie, kamienie pod budowe, gabiony, utwardzenia",
      link: "/podstrona2",
      svgPath: '/icons/home/rock.svg'
    },
    {
      title: "Transport",
      description: "Wywrotki 6x6 i 4x4, HDS, ciężarówki samozałodowawcze",
      link: "/podstrona3",
      svgPath: '/icons/home/lorry.svg',
      size: 70
    }
  ];

  const rows = [];
  for (let i = 0; i < tilesData.length; i += 3) {
    rows.push(tilesData.slice(i, i + 3));
  }

  return (
    <section
      className="relative z-30 py-8 md:py-16"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, white 100%)',
        marginTop: '-5rem'
      }}
    >
      <div className="container mx-auto px-6 sm:px-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-wrap ${row.length < 3 ? 'justify-center' : 'justify-between'
              } gap-y-8 ${rowIndex > 0 ? 'mt-8' : ''}`}
          >
            {row.map((tile, index) => (
              <div key={index} className="w-full px-4 sm:px-0 sm:w-[260px] md:w-[300px]">
                <Tile
                  title={tile.title}
                  description={tile.description}
                  link={tile.link}
                  svgPath={tile.svgPath}
                  size={tile.size}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}