import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WalletButton() {
  // TODO: Integrate OnchainKit wallet connection
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button 
        className="btn-glass gap-2 px-4 py-2 text-sm"
        onClick={() => {
          // Wallet connection will be handled by OnchainKit
          console.log("Connect wallet");
        }}
      >
        <Wallet className="w-4 h-4" />
        <span className="hidden sm:inline">Connect Wallet</span>
      </Button>
    </div>
  );
}
