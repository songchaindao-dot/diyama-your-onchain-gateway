import { motion } from "framer-motion";
import { Shield, DollarSign, Zap } from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "You Own Your Content",
    description: "Your work lives on the blockchain forever. No platform can delete it, hide it, or claim it. It's cryptographically yours.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: DollarSign,
    title: "You Keep the Money",
    description: "Get paid directly from your fans. No middlemen taking 30-50%. Instant payments, anywhere in the world.",
    color: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "Instant Global Access",
    description: "Your fan in Lagos can support you as easily as one in LA. No bank delays, no currency conversion headaches.",
    color: "from-primary-glow to-accent",
  },
];

export function TheSolution() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
          The Solution: Going Onchain
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          "Onchain" means your content, earnings, and ownership are recorded on a public, 
          permanent blockchain. Think of it as the ultimate receipt that can never be faked or erased.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-glow`}>
              <solution.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              {solution.title}
            </h3>
            <p className="text-muted-foreground">
              {solution.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
