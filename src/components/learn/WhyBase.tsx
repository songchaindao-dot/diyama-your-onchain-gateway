import { motion } from "framer-motion";
import { Zap, Clock, Shield, Smartphone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Zap,
    value: "< $0.01",
    label: "Transaction Costs",
    description: "Pennies, not dollars",
  },
  {
    icon: Clock,
    value: "2 sec",
    label: "Transaction Speed",
    description: "Near-instant confirmations",
  },
  {
    icon: Shield,
    value: "Coinbase",
    label: "Backed By",
    description: "Trusted & secure",
  },
];

const baseAppFeatures = [
  "Easy wallet management",
  "Buy crypto with card",
  "Discover trending creators",
  "Track your portfolio",
  "Connect with the community",
];

export function WhyBase() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
          Why Base?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Built by Coinbase, trusted by millions, designed for creators
        </p>
      </motion.div>
      
      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card p-6 rounded-2xl text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-display font-bold gradient-text mb-1">
              {stat.value}
            </p>
            <p className="text-lg font-medium text-foreground mb-1">
              {stat.label}
            </p>
            <p className="text-sm text-muted-foreground">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Base App Promotion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card p-8 rounded-2xl border-2 border-primary/30 shadow-glow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center shadow-glow">
                <Smartphone className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                Get the Base App
              </h3>
              <p className="text-muted-foreground mb-4">
                The easiest way to start your onchain journey. Everything you need in one app.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {baseAppFeatures.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-glow"
                onClick={() => window.open('https://base.org/name', '_blank')}
              >
                Download Base App
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
