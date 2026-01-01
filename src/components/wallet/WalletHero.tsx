import { motion } from "framer-motion";
import { ArrowRightLeft, DollarSign, Wallet } from "lucide-react";

export const WalletHero = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-neon"
        >
          <Wallet className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-display font-bold">
          <span className="gradient-text">USDC to Kwacha</span>
          <br />
          <span className="text-foreground">Exchange</span>
        </h1>

        <p className="text-muted-foreground max-w-md mx-auto">
          Convert your USDC to Zambian Kwacha safely through our verified P2P exchange network.
        </p>

        {/* Exchange rate display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 glass-card px-6 py-3"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-foreground">1 USDC</span>
          </div>
          
          <ArrowRightLeft className="w-5 h-5 text-primary" />
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">21 ZMW</span>
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs">
              K
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
