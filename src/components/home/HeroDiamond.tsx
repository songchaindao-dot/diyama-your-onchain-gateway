import { motion } from "framer-motion";

export function HeroDiamond() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/30 via-accent/10 to-transparent animate-pulse" />
      <div className="absolute inset-4 rounded-full bg-gradient-radial from-accent/20 via-primary/10 to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
      
      {/* Diamond container with 3D rotation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateY: [0, 180, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        {/* Diamond shape using CSS */}
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Top pyramid */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, hsl(220, 100%, 60%) 0%, hsl(185, 100%, 50%) 50%, hsl(220, 100%, 40%) 100%)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 50%, 0% 50%)",
              filter: "drop-shadow(0 0 20px hsl(185, 100%, 50%, 0.6))",
            }}
          />
          {/* Bottom pyramid */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(225deg, hsl(220, 100%, 50%) 0%, hsl(185, 100%, 60%) 50%, hsl(220, 100%, 70%) 100%)",
              clipPath: "polygon(50% 50%, 100% 50%, 50% 100%, 0% 50%)",
              filter: "drop-shadow(0 0 20px hsl(220, 100%, 50%, 0.6))",
            }}
          />
          {/* Center highlight */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 40%, hsl(0, 0%, 100%, 0.3) 50%, transparent 60%)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
        </div>
      </motion.div>
      
      {/* Sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
