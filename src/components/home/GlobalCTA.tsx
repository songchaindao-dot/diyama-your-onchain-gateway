import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GlobalCTA() {
  return (
    <section className="px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl -z-10" />
        
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="w-6 h-6 text-primary" />
          <span className="text-muted-foreground">→</span>
          <MapPin className="w-6 h-6 text-accent" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
          From <span className="text-primary">Lusaka</span> to{" "}
          <span className="text-accent">Los Angeles</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
          Creators everywhere are building their future onchain. 
          Your location doesn't matter — your creativity does.
        </p>

        <div className="mt-8">
          <Link to="/learn">
            <Button className="btn-gradient text-lg px-8 py-6 gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
