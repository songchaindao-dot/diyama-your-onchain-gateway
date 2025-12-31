import { motion } from "framer-motion";
import { Heart, ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function DonationSection() {
  const donationAddress = "imanafrikah.base.eth";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(donationAddress);
    toast.success("Address copied to clipboard!");
  };

  return (
    <section className="px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        <div className="glass-card p-6 rounded-2xl text-center relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Support This Project
            </h3>
            
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              Diyama is built with love for the African creator community. 
              Your support helps us keep improving and adding features.
            </p>

            <p className="text-xs text-muted-foreground mb-4">
              Any amount from <span className="text-accent font-semibold">0.03 ETH</span> and above is deeply appreciated 💙
            </p>

            {/* Donation address */}
            <div className="flex items-center justify-center gap-2 bg-muted/50 rounded-lg px-4 py-3 mb-4">
              <code className="text-sm text-primary font-mono">
                {donationAddress}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:text-accent"
                onClick={copyAddress}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground italic">
              Thank you in advance for believing in this vision. 
              Together, we're making onchain accessible for everyone. 🙏
            </p>

            <a
              href="https://base.app/invite/imanafrikah/WTL0V0H3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors mt-4"
            >
              View on Base
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
