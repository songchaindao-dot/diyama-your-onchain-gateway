import { motion } from "framer-motion";
import { Music, Palette, Video, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const examples = [
  {
    icon: Music,
    title: "For Musicians",
    emoji: "🎵",
    comparison: {
      old: {
        platform: "Spotify",
        earning: "$0.003 per stream",
        note: "Need 1 million streams for $3,000",
      },
      new: {
        platform: "$ongChainn",
        earning: "$1+ per mint",
        note: "100 fans minting = $100+ instantly",
      },
    },
    cta: {
      text: "Check out Songchainn.xyz",
      url: "https://songchainn.xyz",
    },
    highlight: true,
  },
  {
    icon: Palette,
    title: "For Artists",
    emoji: "🎨",
    comparison: {
      old: {
        platform: "Instagram",
        earning: "$0 for posts",
        note: "Your art gets likes, not money",
      },
      new: {
        platform: "Onchain Art",
        earning: "Set your own price + royalties",
        note: "Earn forever when your art resells",
      },
    },
  },
  {
    icon: Video,
    title: "For Creators",
    emoji: "📹",
    comparison: {
      old: {
        platform: "Patreon",
        earning: "5-12% platform fees",
        note: "Plus payment processor cuts",
      },
      new: {
        platform: "Creator Coins",
        earning: "Near-zero fees",
        note: "Fans invest in YOU directly",
      },
    },
  },
];

export function RealExamples() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
          Real Examples for Real Creators
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how going onchain changes the game for different types of creators
        </p>
      </motion.div>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`glass-card p-6 rounded-2xl ${example.highlight ? 'ring-2 ring-primary shadow-glow' : ''}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{example.emoji}</span>
              <h3 className="text-xl font-display font-bold text-foreground">
                {example.title}
              </h3>
              {example.highlight && (
                <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Old Way */}
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-destructive font-medium mb-2">OLD WAY</p>
                <p className="text-lg font-bold text-foreground">{example.comparison.old.platform}</p>
                <p className="text-2xl font-display font-bold text-destructive my-2">
                  {example.comparison.old.earning}
                </p>
                <p className="text-sm text-muted-foreground">{example.comparison.old.note}</p>
              </div>
              
              {/* New Way */}
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-primary font-medium mb-2">ONCHAIN WAY</p>
                <p className="text-lg font-bold text-foreground">{example.comparison.new.platform}</p>
                <p className="text-2xl font-display font-bold text-primary my-2">
                  {example.comparison.new.earning}
                </p>
                <p className="text-sm text-muted-foreground">{example.comparison.new.note}</p>
              </div>
            </div>
            
            {example.cta && (
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(example.cta.url, '_blank')}
                >
                  {example.cta.text}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
