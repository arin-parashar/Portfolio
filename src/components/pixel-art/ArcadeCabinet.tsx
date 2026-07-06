'use client';

/* ═══════════════════════════════════════════════════════════
   PIXEL ART ARCADE CABINET
   Each cabinet renders a pixel-art Pokémon on its "screen"
   using a grid of divs. Pure CSS — no images.
   ═══════════════════════════════════════════════════════════ */

interface PixelGridProps {
  data: string[];
  colors: Record<string, string>;
  pixelSize?: number;
}

function PixelGrid({ data, colors, pixelSize = 4 }: PixelGridProps) {
  const cols = data[0].length;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
        gap: 0,
      }}
    >
      {data.flatMap((row, y) =>
        row.split('').map((char, x) => (
          <div
            key={`${y}-${x}`}
            style={{
              width: pixelSize,
              height: pixelSize,
              backgroundColor: char === '.' ? 'transparent' : (colors[char] || 'transparent'),
            }}
          />
        ))
      )}
    </div>
  );
}

/* ─── Pokémon Pixel Art Data (12×12 grids) ─── */

const charizardPixels = [
  '....OO......',
  '...OWOO.....',
  '...OOOO.....',
  '..OOOO......',
  '.OOOOO.WW...',
  '.OOOO.WWWW..',
  '..OOOO..WW..',
  '...OOOO.....',
  '...O..O.....',
  '..OO..OO....',
  '........ry..',
  '.........y..',
];

const charizardColors: Record<string, string> = {
  O: '#E87040', // orange body
  W: '#D05820', // wings (darker)
  r: '#FF4400', // flame red
  y: '#FFCC00', // flame yellow
};

const blastoisePixels = [
  '....BB......',
  '...BWBB.....',
  'c..BBBB..c.',
  'c..BBBB..c.',
  '.BBBBBBBB..',
  '.BSSSSSSB..',
  '..BBBBBB...',
  '..B....B...',
  '.BB....BB..',
  '............',
  '............',
  '............',
];

const blastoiseColors: Record<string, string> = {
  B: '#5090D0', // blue body
  W: '#FFFFFF', // white eye
  S: '#8B6040', // shell brown
  c: '#909090', // cannons grey
};

const venusaurPixels = [
  '....rrr.....',
  '...rRRr.....',
  '..rRRRRr....',
  '...GGGG.....',
  '..GGGGGG....',
  '.GGGGGGGG...',
  '..GGGGGG....',
  '..G.GG.G....',
  '.GG.GG.GG...',
  '............',
  '............',
  '............',
];

const venusaurColors: Record<string, string> = {
  r: '#FF5060', // flower petals
  R: '#D03040', // flower center
  G: '#50A850', // green body
};

/* ─── Pokémon data map ─── */
const pokemonData = {
  charizard: { pixels: charizardPixels, colors: charizardColors },
  blastoise: { pixels: blastoisePixels, colors: blastoiseColors },
  venusaur: { pixels: venusaurPixels, colors: venusaurColors },
};

type PokemonType = keyof typeof pokemonData;

interface ArcadeCabinetProps {
  pokemon: PokemonType;
  glowClass: string;       // e.g. 'screen-glow-fire'
  cabinetColor: string;    // e.g. '#D04020'
  label: string;           // e.g. 'CHARIZARD'
  accentColor: string;     // for label glow
  imageSrc?: string;       // Custom image file to display instead of CSS grid
}

export function ArcadeCabinet({ pokemon, glowClass, cabinetColor, label, accentColor, imageSrc }: ArcadeCabinetProps) {
  const poke = pokemonData[pokemon];

  return (
    <div className="flex flex-col items-center group" style={{ animation: 'float-pixel 4s ease-in-out infinite' }}>
      {/* Cabinet body */}
      <div
        className="relative flex flex-col items-center p-3 pt-4"
        style={{
          backgroundColor: cabinetColor,
          width: 100,
          border: '3px solid #1a1a1a',
          borderBottom: 'none',
        }}
      >
        {/* Top marquee */}
        <div
          className="w-full text-center py-1 mb-2 border border-black/30"
          style={{
            backgroundColor: `${accentColor}20`,
            fontFamily: 'var(--font-press-start-2p)',
            fontSize: '5px',
            color: accentColor,
            letterSpacing: '1px',
            textShadow: `0 0 5px ${accentColor}`,
          }}
        >
          {label}
        </div>

        {/* Screen */}
        <div
          className={`${glowClass} relative flex items-center justify-center p-2 overflow-hidden`}
          style={{
            backgroundColor: '#0a0a20',
            border: '2px solid #333',
            width: 72,
            height: 72,
            animation: 'screen-flicker 8s linear infinite',
          }}
        >
          {/* Scanlines on screen */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)',
            }}
          />
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={label} 
              className="z-0"
              style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated' }} 
            />
          ) : (
            <PixelGrid data={poke.pixels} colors={poke.colors} pixelSize={4} />
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-3 mb-1">
          {/* Joystick */}
          <div className="w-3 h-3 rounded-full bg-gray-700 border border-gray-600" />
          {/* Buttons */}
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF0040' }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#39FF14' }} />
          </div>
        </div>
      </div>

      {/* Cabinet base */}
      <div
        style={{
          backgroundColor: cabinetColor,
          width: 100,
          height: 24,
          border: '3px solid #1a1a1a',
          borderTop: '2px solid rgba(255,255,255,0.1)',
        }}
      />
      {/* Legs */}
      <div className="flex justify-between" style={{ width: 80 }}>
        <div className="w-3 h-4" style={{ backgroundColor: '#1a1a1a' }} />
        <div className="w-3 h-4" style={{ backgroundColor: '#1a1a1a' }} />
      </div>
    </div>
  );
}
