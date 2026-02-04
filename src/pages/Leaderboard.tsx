import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ExternalLink, Trophy, Award, Star, Rocket, Users, Code } from "lucide-react";

// Top ecosystem contributors based on public information from Base ecosystem
const topBuilders = [
  {
    rank: 1,
    name: "Aerodrome Finance",
    handle: "@AesrodromeFi",
    category: "DeFi Protocol",
    achievement: "Leading DEX on Base by volume",
    contribution: "Core Infrastructure",
    link: "https://x.com/AerodromeFi"
  },
  {
    rank: 2,
    name: "Coinbase",
    handle: "@coinbase",
    category: "Exchange",
    achievement: "Built and launched Base L2",
    contribution: "Chain Development",
    link: "https://x.com/coinbase"
  },
  {
    rank: 3,
    name: "Jesse Pollak",
    handle: "@jessepollak",
    category: "Base Creator",
    achievement: "Head of Base at Coinbase",
    contribution: "Leadership",
    link: "https://x.com/jessepollak"
  },
  {
    rank: 4,
    name: "Paragraph",
    handle: "@paragraph_xyz",
    category: "Publishing",
    achievement: "Ecosystem Fund recipient",
    contribution: "Creator Tools",
    link: "https://x.com/paragraph_xyz"
  },
  {
    rank: 5,
    name: "Truflation",
    handle: "@truaborad",
    category: "Oracle",
    achievement: "Ecosystem Fund recipient",
    contribution: "Data Infrastructure",
    link: "https://x.com/truflation"
  },
  {
    rank: 6,
    name: "0xSplits",
    handle: "@0xSplits",
    category: "Payments",
    achievement: "Revenue splitting protocol",
    contribution: "Payment Tools",
    link: "https://x.com/0xSplits"
  },
  {
    rank: 7,
    name: "OpenCover",
    handle: "@OpenCover",
    category: "Insurance",
    achievement: "Ecosystem Fund recipient",
    contribution: "Risk Management",
    link: "https://x.com/OpenCover"
  },
  {
    rank: 8,
    name: "Avantis",
    handle: "@avaboradisfi",
    category: "DeFi",
    achievement: "Ecosystem Fund recipient",
    contribution: "Trading Protocol",
    link: "https://x.com/avantisfi"
  },
  {
    rank: 9,
    name: "BSX",
    handle: "@bsx_exchange",
    category: "Exchange",
    achievement: "Ecosystem Fund recipient",
    contribution: "DEX Development",
    link: "https://x.com/bsx_exchange"
  },
  {
    rank: 10,
    name: "Onboard",
    handle: "@onaboradadhq",
    category: "Onboarding",
    achievement: "Ecosystem Fund recipient",
    contribution: "User Acquisition",
    link: "https://x.com/onboardhq"
  }
];

const categories = [
  { name: "DeFi Protocols", icon: Rocket, count: "150+" },
  { name: "Developer Tools", icon: Code, count: "80+" },
  { name: "Consumer Apps", icon: Users, count: "100+" }
];

const Leaderboard = () => (
  <MainLayout>
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-bold gradient-text mb-3">
          Base Leaderboard
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Top builders and contributors in the Base ecosystem. 
          Based on official Base announcements, ecosystem fund investments, and public recognition.
        </p>
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {categories.map((cat, index) => {
          const IconComponent = cat.icon;
          return (
            <Card key={index} className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <IconComponent className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{cat.count}</p>
                <p className="text-xs text-muted-foreground">{cat.name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {topBuilders.slice(0, 3).map((builder, index) => (
          <Card 
            key={index} 
            className={`text-center ${
              index === 0 
                ? 'bg-gradient-to-b from-yellow-500/10 to-card border-yellow-500/30' 
                : index === 1
                  ? 'bg-gradient-to-b from-gray-400/10 to-card border-gray-400/30'
                  : 'bg-gradient-to-b from-amber-700/10 to-card border-amber-700/30'
            }`}
          >
            <CardContent className="p-4">
              <div className="mb-2">
                {index === 0 && <Trophy className="h-8 w-8 mx-auto text-yellow-500" />}
                {index === 1 && <Award className="h-8 w-8 mx-auto text-gray-400" />}
                {index === 2 && <Star className="h-8 w-8 mx-auto text-amber-700" />}
              </div>
              <Avatar className="h-12 w-12 mx-auto mb-2">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {builder.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <p className="font-semibold text-sm truncate">{builder.name}</p>
              <a 
                href={builder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                {builder.handle}
              </a>
              <Badge variant="outline" className="mt-2 text-xs">
                {builder.category}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <Card className="bg-card/80 border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">Top Ecosystem Contributors</CardTitle>
          <CardDescription>
            Builders recognized through Base Ecosystem Fund and official announcements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Builder</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Contribution</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topBuilders.map((builder) => (
                <TableRow key={builder.rank}>
                  <TableCell className="font-medium">
                    {builder.rank <= 3 ? (
                      <span className={`font-bold ${
                        builder.rank === 1 ? 'text-yellow-500' :
                        builder.rank === 2 ? 'text-gray-400' :
                        'text-amber-700'
                      }`}>
                        {builder.rank}
                      </span>
                    ) : builder.rank}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{builder.name}</p>
                      <p className="text-xs text-muted-foreground">{builder.achievement}</p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="secondary" className="text-xs">
                      {builder.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                    {builder.contribution}
                  </TableCell>
                  <TableCell>
                    <a 
                      href={builder.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* How Rankings Work */}
      <Card className="mt-8 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">How Rankings Work</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            This leaderboard highlights builders recognized through official Base channels:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Base Ecosystem Fund investments and announcements
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Featured projects in Base documentation and showcase
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Public recognition from @base and Coinbase official channels
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Core infrastructure and tool contributions to the ecosystem
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Official Sources */}
      <div className="mt-8 text-center space-y-2">
        <p className="text-sm text-muted-foreground">Follow official Base accounts for updates:</p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://x.com/base"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm flex items-center gap-1"
          >
            @base <ExternalLink className="h-3 w-3" />
          </a>
          <a 
            href="https://x.com/jessepollak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm flex items-center gap-1"
          >
            @jessepollak <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Source Attribution */}
      <p className="text-center text-xs text-muted-foreground mt-6">
        Rankings based on{" "}
        <a 
          href="https://blog.base.org/base-ecosystem-fund-announces-first-six-investments" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Base Ecosystem Fund announcements
        </a>
        {" "}and official Base recognition
      </p>
    </div>
  </MainLayout>
);

export default Leaderboard;
