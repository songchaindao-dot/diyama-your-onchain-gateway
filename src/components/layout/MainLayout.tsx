import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { WalletButton } from "./WalletButton";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
      
      {/* Gradient glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-gradient-glow opacity-20 pointer-events-none blur-3xl" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent opacity-30 pointer-events-none blur-3xl" />
      
      {/* Top wallet button */}
      <WalletButton />
      
      {/* Main content */}
      <main className="relative pb-28 pt-4">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
