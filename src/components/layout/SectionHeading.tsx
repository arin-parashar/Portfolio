import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'blue' | 'cyan' | 'green' | 'pink' | 'gold';
}

const colorMap: Record<string, { text: string; glow: string; border: string }> = {
  primary: { text: 'text-primary', glow: 'pixel-glow-primary', border: 'bg-primary' },
  secondary: { text: 'text-secondary', glow: 'pixel-glow-secondary', border: 'bg-secondary' },
  accent: { text: 'text-accent', glow: 'pixel-glow-accent', border: 'bg-accent' },
  // Mapping old/custom values to the new professional palette
  blue: { text: 'text-primary', glow: 'pixel-glow-primary', border: 'bg-primary' },
  cyan: { text: 'text-primary', glow: 'pixel-glow-primary', border: 'bg-primary' },
  green: { text: 'text-secondary', glow: 'pixel-glow-secondary', border: 'bg-secondary' },
  pink: { text: 'text-accent', glow: 'pixel-glow-accent', border: 'bg-accent' },
  gold: { text: 'text-accent', glow: 'pixel-glow-accent', border: 'bg-accent' },
};

export function SectionHeading({ title, subtitle, align = 'center', className, color = 'primary' }: SectionHeadingProps) {
  // Fallback to primary if the color string isn't found
  const c = colorMap[color] || colorMap['primary'];

  return (
    <div className={cn('mb-16', align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2
        className={cn(
          'font-[family-name:var(--font-press-start-2p)] text-sm sm:text-base md:text-lg tracking-wider',
          c.text, c.glow
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Pixel divider */}
      <div className={cn('mt-6 flex gap-1', align === 'center' ? 'justify-center' : 'justify-start')}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={cn('w-2 h-2', c.border)} style={{ opacity: 1 - i * 0.15 }} />
        ))}
      </div>
    </div>
  );
}
