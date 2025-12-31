import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Wallet, 
  BookOpen, 
  TrendingUp, 
  Newspaper, 
  Trophy, 
  User,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/wallet", icon: Wallet, label: "Wallet" },
  { path: "/learn", icon: BookOpen, label: "Learn" },
  { path: "/opportunities", icon: Sparkles, label: "Opportunities" },
  { path: "/trending", icon: TrendingUp, label: "Trending" },
  { path: "/news", icon: Newspaper, label: "News" },
  { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
  { path: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/80 backdrop-blur-xl safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto overflow-x-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center min-w-[3.5rem] py-1 group"
            >
              <motion.div
                className={cn(
                  "relative p-2 rounded-xl transition-colors duration-200",
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground group-hover:text-accent"
                )}
                whileTap={{ scale: 0.9 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-bg"
                    className="absolute inset-0 bg-primary/20 rounded-xl"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <Icon className={cn(
                  "w-5 h-5 relative z-10",
                  isActive && "nav-active"
                )} />
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.4)"
                    }}
                  />
                )}
              </motion.div>
              <span className={cn(
                "text-[10px] mt-1 transition-colors duration-200",
                isActive 
                  ? "text-primary font-medium" 
                  : "text-muted-foreground group-hover:text-accent"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
