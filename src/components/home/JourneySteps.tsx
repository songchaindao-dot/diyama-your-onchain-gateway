import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Wallet, Compass, Lock, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Discover Base",
    description: "Learn what Base is and why it matters for creators",
    icon: Compass,
    link: "/learn",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Get Your Wallet",
    description: "Set up your digital wallet to start your journey",
    icon: Wallet,
    link: "/learn#wallet-setup",
    color: "from-cyan-500 to-green-500",
  },
  {
    id: 3,
    title: "Start Exploring",
    description: "Find opportunities and start creating onchain",
    icon: Sparkles,
    link: "/opportunities",
    color: "from-green-500 to-yellow-500",
  },
];

export function JourneySteps() {
  const [unlockedSteps, setUnlockedSteps] = useState<number[]>([1]);

  const handleStepClick = (stepId: number) => {
    if (!unlockedSteps.includes(stepId + 1) && stepId < 3) {
      setUnlockedSteps((prev) => [...prev, stepId + 1]);
    }
  };

  return (
    <section className="px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold">
          <span className="gradient-text">Your Journey</span> Starts Here
        </h2>
        <p className="text-muted-foreground mt-2">
          Complete each step to unlock the next
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {steps.map((step, index) => {
          const isUnlocked = unlockedSteps.includes(step.id);
          const isCompleted = unlockedSteps.includes(step.id + 1);
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {isUnlocked ? (
                <Link
                  to={step.link}
                  onClick={() => handleStepClick(step.id)}
                  className="block"
                >
                  <div className="glass-card p-6 rounded-xl card-hover group h-full">
                    {/* Step number & icon */}
                    <div className="relative mb-4">
                      <div className={cn(
                        "w-16 h-16 rounded-full mx-auto flex items-center justify-center",
                        "bg-gradient-to-br",
                        step.color,
                        isCompleted ? "opacity-60" : "",
                        !isCompleted && "sparkle"
                      )}>
                        {isCompleted ? (
                          <Check className="w-8 h-8 text-primary-foreground" />
                        ) : (
                          <Icon className="w-8 h-8 text-primary-foreground" />
                        )}
                      </div>
                      <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="font-semibold text-lg text-foreground text-center group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      {step.description}
                    </p>

                    {isCompleted && (
                      <div className="mt-3 text-center">
                        <span className="text-xs text-success font-medium">
                          ✓ Completed
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              ) : (
                <div className="glass-card p-6 rounded-xl opacity-50 cursor-not-allowed h-full">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-muted">
                      <Lock className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-muted text-muted-foreground text-sm font-bold flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-muted-foreground text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/60 text-center mt-2">
                    Complete previous step to unlock
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
