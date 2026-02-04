import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import WalletExchange from "./pages/WalletExchange";
import Opportunities from "./pages/Opportunities";
import Trending from "./pages/Trending";
import News from "./pages/News";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Lesson pages
import WhatIsBase from "./pages/lessons/WhatIsBase";
import WhoBuiltBase from "./pages/lessons/WhoBuiltBase";
import HowBaseWorks from "./pages/lessons/HowBaseWorks";
import BaseAndEthereum from "./pages/lessons/BaseAndEthereum";
import WhyLowCost from "./pages/lessons/WhyLowCost";
import WhatYouCanBuild from "./pages/lessons/WhatYouCanBuild";
import WhatBaseIsNot from "./pages/lessons/WhatBaseIsNot";
import CreatorsGuide from "./pages/lessons/CreatorsGuide";
import SafetyAndTrust from "./pages/lessons/SafetyAndTrust";
import Resources from "./pages/lessons/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/lessons/what-is-base" element={<WhatIsBase />} />
          <Route path="/lessons/who-built-base" element={<WhoBuiltBase />} />
          <Route path="/lessons/how-base-works" element={<HowBaseWorks />} />
          <Route path="/lessons/base-and-ethereum" element={<BaseAndEthereum />} />
          <Route path="/lessons/why-low-cost" element={<WhyLowCost />} />
          <Route path="/lessons/what-you-can-build" element={<WhatYouCanBuild />} />
          <Route path="/lessons/what-base-is-not" element={<WhatBaseIsNot />} />
          <Route path="/lessons/creators-guide" element={<CreatorsGuide />} />
          <Route path="/lessons/safety-and-trust" element={<SafetyAndTrust />} />
          <Route path="/lessons/resources" element={<Resources />} />
          <Route path="/wallet" element={<WalletExchange />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/news" element={<News />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
