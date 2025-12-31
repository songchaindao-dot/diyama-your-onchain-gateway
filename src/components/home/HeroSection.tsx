import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroDiamond } from "./HeroDiamond";

export function HeroSection() {
  return (
    <section className="relative px-4 pt-16 pb-12 overflow-hidden">
      {/* Animated diamond */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="float"
      >
        <HeroDiamond />
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
          <span className="gradient-text">Welcome to the</span>
          <br />
          <span className="text-foreground">Creator's Onchain World</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto"
        >
          You don't need money to start, only curiosity. ✨
        </motion.p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <Link to="/learn">
          <Button className="btn-gradient w-full sm:w-auto gap-2 text-base">
            Learn What Base Is
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Button className="btn-glass w-full sm:w-auto gap-2 text-base">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </Button>
      </motion.div>
    </section>
  );
}
