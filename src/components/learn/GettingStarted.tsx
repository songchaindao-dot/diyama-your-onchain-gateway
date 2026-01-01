import { motion } from "framer-motion";
import { Download, Network, Coins, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: Download,
    title: "Download a Wallet",
    description: "Get the Coinbase Wallet app or use the Base App. This is your digital wallet that holds your crypto and connects to onchain platforms.",
    tip: "Coinbase Wallet is beginner-friendly and works great with Base.",
    links: [
      { text: "Coinbase Wallet", url: "https://www.coinbase.com/wallet" },
    ],
  },
  {
    number: 2,
    icon: Network,
    title: "Add Base Network",
    description: "Base is a layer 2 blockchain built by Coinbase. It's fast, cheap, and where all the action is happening for creators.",
    tip: "If you use Coinbase Wallet or Base App, Base is already set up!",
  },
  {
    number: 3,
    icon: Coins,
    title: "Get ETH on Base",
    description: "ETH is the currency used on Base. You'll need a small amount (even $5-10) to start creating and minting.",
    tip: "Buy ETH on Coinbase, then send it to your wallet on Base network.",
    links: [
      { text: "Bridge to Base", url: "https://bridge.base.org" },
    ],
  },
  {
    number: 4,
    icon: Rocket,
    title: "Start Creating on Zora",
    description: "Zora is the go-to platform for minting content on Base. Upload your music, art, or videos and start earning from your first mint.",
    tip: "Your first mint is a milestone - celebrate it!",
    links: [
      { text: "Zora", url: "https://zora.co" },
    ],
  },
];

export function GettingStarted() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
          Getting Started Guide
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Four simple steps to go from Web2 creator to onchain creator
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-display font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card p-6 rounded-2xl flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-foreground mb-4">
                      {step.description}
                    </p>
                    
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                      <p className="text-sm text-primary">
                        💡 <span className="font-medium">Pro tip:</span> {step.tip}
                      </p>
                    </div>
                    
                    {step.links && (
                      <div className="flex flex-wrap gap-2">
                        {step.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                            onClick={() => window.open(link.url, '_blank')}
                          >
                            {link.text}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
