import { motion } from "framer-motion";
import { Users, TrendingUp, Palette, Globe } from "lucide-react";

const stats = [
  {
    label: "Active Creators",
    value: "10K+",
    icon: Users,
    color: "text-primary",
  },
  {
    label: "Weekly Opportunities",
    value: "50+",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    label: "Total Mints",
    value: "1M+",
    icon: Palette,
    color: "text-success",
  },
  {
    label: "Community Members",
    value: "100K+",
    icon: Globe,
    color: "text-warning",
  },
];

export function QuickStats() {
  return (
    <section className="px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          The Base <span className="gradient-text">Community</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-4 md:p-6 rounded-xl text-center card-hover"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/50 flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
