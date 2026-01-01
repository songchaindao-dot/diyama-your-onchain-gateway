import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

const problems = [
  "Platforms take 30-50% of your earnings",
  "You don't own your followers - they do",
  "One algorithm change can kill your income",
  "Getting paid across borders is expensive & slow",
  "Your content can be deleted anytime",
];

export function TheProblem() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-2xl max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            The Problem with Web2
          </h2>
        </div>
        
        <p className="text-muted-foreground mb-6 text-lg">
          Right now, if you're creating content online - music, art, videos, writing - 
          here's what you're dealing with:
        </p>
        
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20"
            >
              <X className="w-5 h-5 text-destructive flex-shrink-0" />
              <span className="text-foreground">{problem}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-lg text-center text-muted-foreground italic"
        >
          Sound familiar? There's a better way...
        </motion.p>
      </motion.div>
    </section>
  );
}
