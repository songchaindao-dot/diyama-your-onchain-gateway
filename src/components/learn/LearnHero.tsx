import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function LearnHero() {
  return (
    <section className="text-center py-12 px-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-accent to-primary-glow flex items-center justify-center shadow-glow"
      >
        <BookOpen className="w-16 h-16 text-primary-foreground" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4"
      >
        What is Base?
      </motion.h1>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        (In Plain English)
      </motion.p>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-lg text-foreground/80 max-w-3xl mx-auto mt-6"
      >
        A complete guide to understanding blockchain, Base network, and how creators 
        are building wealth onchain. No jargon, just real talk.
      </motion.p>
    </section>
  );
}
