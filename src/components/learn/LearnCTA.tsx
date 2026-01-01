import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function LearnCTA() {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="glass-card p-10 rounded-3xl border border-primary/30">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
          >
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
            Ready to See Real Opportunities?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Now that you understand the basics, explore grants, creator programs, 
            and tools that can help you build your onchain presence.
          </p>
          
          <Button
            size="lg"
            onClick={() => navigate('/opportunities')}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-glow text-lg px-8 py-6"
          >
            Explore Opportunities
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
