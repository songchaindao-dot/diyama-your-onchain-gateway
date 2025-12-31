import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign } from "lucide-react";

export function ExchangeBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 py-8"
    >
      <Link to="/wallet">
        <div className="relative max-w-2xl mx-auto group cursor-pointer">
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity blur-sm" />
          
          <div className="relative glass-card p-6 rounded-2xl card-hover">
            <div className="flex items-center justify-between gap-4">
              {/* Left side - currencies */}
              <div className="flex items-center gap-4">
                {/* USDC coin */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <DollarSign className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-xs bg-primary px-1.5 py-0.5 rounded-full font-semibold">
                    USDC
                  </span>
                </div>
                
                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                
                {/* Kwacha */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-xl font-bold text-primary-foreground">K</span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-xs bg-success px-1.5 py-0.5 rounded-full font-semibold text-success-foreground">
                    ZMW
                  </span>
                </div>
              </div>
              
              {/* Right side - info */}
              <div className="text-right flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  USDC to Kwacha Exchange
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  1 USDC = <span className="text-accent font-semibold">K21</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Available 7am-10pm CAT • Min K525 (25 USDC)
                </p>
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-5 h-5 text-accent" />
            </div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}
