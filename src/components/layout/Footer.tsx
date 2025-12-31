import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-border/30 mb-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
          Built by{" "}
          <a
            href="https://base.app/invite/imanafrikah/WTL0V0H3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors inline-flex items-center gap-1 link-animated"
          >
            IMan Afrikah
            <span className="text-muted-foreground">[imanafrikah.base.eth]</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Diyama — The Base Handbook, Onchain Tour Guide & Support System
        </p>
      </div>
    </footer>
  );
}
