import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Zap, Gamepad2, Wallet, BarChart3 } from "lucide-react";

const trendingProjects = [
  {
    name: "Aerodrome",
    description: "The central trading and liquidity marketplace on Base. Leading DEX by volume with innovative ve(3,3) tokenomics.",
    category: "DeFi",
    subcategory: "DEX",
    url: "https://aerodrome.finance",
    stats: "Top DEX on Base",
    icon: BarChart3
  },
  {
    name: "Blocklords",
    description: "A medieval grand strategy game with a player-driven onchain economy. Build kingdoms, command armies, and forge alliances.",
    category: "Gaming",
    subcategory: "Strategy",
    url: "https://blocklords.com",
    stats: "Featured Game",
    icon: Gamepad2
  },
  {
    name: "Coinbase Wallet",
    description: "Self-custody wallet that's now the Base App - an everything app to create, earn, trade, and discover onchain.",
    category: "Wallet",
    subcategory: "Self-custody",
    url: "https://base.app",
    stats: "Official App",
    icon: Wallet
  },
  {
    name: "0xSplits",
    description: "Simple, modular smart contracts for safe and efficient onchain payments. Split revenue from NFT sales, recoup expenses, and more.",
    category: "Infrastructure",
    subcategory: "Payments",
    url: "https://www.0xsplits.xyz",
    stats: "Developer Tool",
    icon: Zap
  },
  {
    name: "Anzen (USDz)",
    description: "Creator of USDz, a stablecoin backed by a diversified RWA portfolio. Mitigate volatility and earn rewards through all market cycles.",
    category: "DeFi",
    subcategory: "Stablecoin",
    url: "https://anzen.finance",
    stats: "RWA Backed",
    icon: TrendingUp
  },
  {
    name: "0xPPL",
    description: "Web3 social platform to follow or interact with onchain activities of your peers and discover trends in a human-readable feed.",
    category: "Consumer",
    subcategory: "Social",
    url: "https://0xppl.com",
    stats: "Social Feed",
    icon: Users
  }
];

const ecosystemCategories = [
  { name: "DeFi", count: "150+", description: "Exchanges, lending, stablecoins" },
  { name: "Consumer", count: "100+", description: "Social, gaming, entertainment" },
  { name: "Infrastructure", count: "80+", description: "Developer tools, oracles, bridges" },
  { name: "Wallet", count: "30+", description: "Self-custody, smart wallets" },
  { name: "Onramp", count: "20+", description: "Fiat-to-crypto services" },
  { name: "AI", count: "25+", description: "AI-powered applications" }
];

const Trending = () => (
  <MainLayout>
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-bold gradient-text mb-3">
          Trending on Base
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Featured projects and popular apps building on Base. 
          Discover the ecosystem powering the global onchain economy.
        </p>
      </div>

      {/* Ecosystem Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {ecosystemCategories.map((cat, index) => (
          <Card key={index} className="bg-card/50 border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{cat.name}</span>
                <Badge variant="outline" className="text-xs">{cat.count}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{cat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Projects */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        Featured Projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {trendingProjects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <Card 
              key={index} 
              className="bg-card/80 border-border/50 hover:border-primary/30 transition-colors group"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                        <Badge variant="outline" className="text-xs">{project.subcategory}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3">
                  {project.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">{project.stats}</span>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Base Goals */}
      <Card className="bg-primary/5 border-primary/20 mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Base 2025 Goals</CardTitle>
          <CardDescription>
            Building the global onchain economy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-primary">$100B</div>
              <div className="text-sm text-muted-foreground">Target assets onchain</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-primary">25M</div>
              <div className="text-sm text-muted-foreground">Target users onchain</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Explore Full Ecosystem */}
      <Card className="bg-card/80 border-border/50">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold mb-2">Explore the Full Ecosystem</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Discover hundreds of apps, tools, and projects building on Base
          </p>
          <a 
            href="https://www.base.org/ecosystem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View Base Ecosystem <ExternalLink className="h-4 w-4" />
          </a>
        </CardContent>
      </Card>

      {/* Source Attribution */}
      <p className="text-center text-xs text-muted-foreground mt-8">
        Information sourced from{" "}
        <a 
          href="https://www.base.org/ecosystem" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          base.org/ecosystem
        </a>
        {" "}and{" "}
        <a 
          href="https://docs.base.org/showcase" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          docs.base.org/showcase
        </a>
      </p>
    </div>
  </MainLayout>
);

export default Trending;
