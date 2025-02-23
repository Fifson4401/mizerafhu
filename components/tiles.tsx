import Tile from "@/components/tile";

export default function Tiles() {
  const tilesData = [
    {
      title: "Roboty ziemne",
      description: "Wykopy, niwelacja terenu, utrzymanie zimowe i utwardzanie dróg, wyburzenia",
      link: "/roboty-ziemne",
      svgPath: '/icons/home/excavator.svg'
    },
    {
      title: "Kruszywa",
      description: "Towary sypkie, kamienie pod budowe, gabiony, utwardzenia",
      link: "/kruszywa",
      svgPath: '/icons/home/rock.svg'
    },
    {
      title: "Transport",
      description: "Samochody 6x6 28t, 4x4 18t, HDS, ciągnik + naczepa 40t",
      link: "/transport",
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
      className="relative z-30 py-8 md:py-16 forced-color-none"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, white 100%)',
        marginTop: '-5rem'
      }}
    >
      <div className="container mx-auto px-6 sm:px-4 forced-color-none">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`forced-color-none flex flex-wrap ${row.length < 3 ? 'justify-center' : 'justify-between'
              } gap-y-8 ${rowIndex > 0 ? 'mt-8' : ''}`}
          >
            {row.map((tile, index) => (
              <div key={index} className="w-full px-4 sm:px-0 sm:w-[260px] md:w-[300px] forced-color-none">
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