import Link from 'next/link';
import { Mail } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { Icons } from '@/components/ui/icons';

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/20 bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* End of page title */}
        <div className="text-center">
          <h3
            className="font-[family-name:var(--font-press-start-2p)] text-xs sm:text-sm text-primary"
            style={{ textShadow: '0 0 10px rgba(59,130,246,0.5)' }}
          >
            END OF TRANSMISSION
          </h3>
          <p className="mt-3 text-muted-foreground text-sm">
            Thanks for scrolling! Feel free to reach out.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30">
            <Icons.github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-secondary transition-colors border border-transparent hover:border-secondary/30">
            <Icons.linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:arinparashar3@gmail.com" className="p-2 text-muted-foreground hover:text-accent transition-colors border border-transparent hover:border-accent/30">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground/50 text-xs font-[family-name:var(--font-geist-mono)]">
          © {new Date().getFullYear()} Arin Parashar — Built with pixels & passion
        </p>
      </div>
    </footer>
  );
}
