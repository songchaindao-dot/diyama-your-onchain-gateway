import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, DollarSign, Users, Rocket, Award, Calendar, ArrowRight } from "lucide-react";

const opportunities = [
  {
    title: "Weekly Builder Rewards",
    description: "2 ETH distributed weekly to active builders. Perfect for experimentation and learning. No minimum project size required.",
    reward: "2 ETH/week",
    type: "Ongoing",
    link: "https://www.builderscore.xyz/",
    requirements: [
      "Build anything on Base (prototypes welcome)",
      "Share progress on social media",
      "Earn based on activity"
    ],
    ideal: "First-time builders, weekend projects, hackathon submissions"
  },
  {
    title: "Builder Grants",
    description: "Retroactive funding for shipped projects that demonstrate real value to the Base ecosystem. Fast approval process.",
    reward: "1-5 ETH",
    type: "Retroactive",
    link: "https://paragraph.com/@grants.base.eth/calling-based-builders",
    requirements: [
      "Project deployed on Base mainnet",
      "Working demo available",
      "Clear documentation"
    ],
    ideal: "Shipped projects ready to scale"
  },
  {
    title: "OP Retro Funding",
    description: "Recognition and rewards for public goods contributions. Create tools, infrastructure, or resources that benefit everyone.",
    reward: "Variable",
    type: "Impact-based",
    link: "https://atlas.optimism.io/",
    requirements: [
      "Open-source project",
      "Documented ecosystem impact",
      "Community adoption metrics"
    ],
    ideal: "Open-source libraries, community tools, analytics dashboards"
  },
  {
    title: "Base Batches",
    description: "Comprehensive founder program with structured development, mentorship from industry experts, and significant funding opportunities.",
    reward: "Up to $1M+",
    type: "Accelerator",
    link: "https://basebatches.xyz/",
    requirements: [
      "Committed to building full-time",
      "Working prototype preferred",
      "Clear vision for scaling"
    ],
    ideal: "Founders ready to build full-time companies"
  },
  {
    title: "Base Ecosystem Fund",
    description: "Investment fund led by Coinbase Ventures for the next generation of onchain projects building on Base.",
    reward: "Investment",
    type: "Venture",
    link: "https://blog.base.org/base-ecosystem-fund-announces-first-six-investments",
    requirements: [
      "Strong team and vision",
      "Traction or clear path to adoption",
      "Building core infrastructure or apps"
    ],
    ideal: "Startups seeking venture investment"
  },
  {
    title: "Base Mentorship Program",
    description: "Connect with experienced builders and industry experts to accelerate your project development.",
    reward: "Mentorship",
    type: "Support",
    link: "https://docs.base.org/get-started/base-mentorship-program",
    requirements: [
      "Active project on Base",
      "Clear goals and milestones",
      "Commitment to learning"
    ],
    ideal: "Builders seeking guidance and expertise"
  },
  {
    title: "Music Ownership on $ongChainn",
    description: "A platform where musicians and fans share in music ownership together on Base. Artists release tracks, fans become co-owners, and everyone builds culture before ownership through community Town Squares.",
    reward: "Shared Ownership Revenue",
    type: "Creator Platform",
    link: "https://www.songchainn.xyz",
    requirements: [
      "Original music or content (artists)",
      "Sign up with email or Base Wallet",
      "Join Town Squares to discover and co-own music (fans)"
    ],
    ideal: "Musicians, producers, fans, and music collectors"
  }
];

const Opportunities = () => (
  <MainLayout>
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-bold gradient-text mb-3">
          Builder Opportunities
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real funding and support programs from Base. Whether you're just starting to experiment 
          or ready to become a full-time founder, Base provides structured opportunities that grow with your ambitions.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 text-center">
            <DollarSign className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">2 ETH</p>
            <p className="text-xs text-muted-foreground">Weekly Rewards</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 text-center">
            <Rocket className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">1-5 ETH</p>
            <p className="text-xs text-muted-foreground">Builder Grants</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 text-center">
            <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">$1M+</p>
            <p className="text-xs text-muted-foreground">Base Batches</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4 text-center">
            <Award className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">800+</p>
            <p className="text-xs text-muted-foreground">Applications Received</p>
          </CardContent>
        </Card>
      </div>

      {/* Opportunities List */}
      <div className="space-y-6">
        {opportunities.map((opp, index) => (
          <Card key={index} className="bg-card/80 border-border/50 hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-xl mb-1">{opp.title}</CardTitle>
                  <CardDescription className="text-sm">{opp.description}</CardDescription>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {opp.type}
                  </Badge>
                  <span className="text-primary font-semibold text-sm">{opp.reward}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">REQUIREMENTS</p>
                  <ul className="space-y-1">
                    {opp.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">IDEAL FOR</p>
                  <p className="text-sm text-foreground/80">{opp.ideal}</p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <a href={opp.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Apply Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Before You Apply Section */}
      <Card className="mt-8 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Before You Apply
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <p className="font-medium mb-1">1. Build on Base</p>
              <p className="text-sm text-muted-foreground">
                Deploy to Base mainnet. Some programs accept testnet, but mainnet deployment gives you an advantage.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">2. Document Your Work</p>
              <p className="text-sm text-muted-foreground">
                Create clear documentation with setup instructions, project goals, and demo materials.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">3. Track Your Impact</p>
              <p className="text-sm text-muted-foreground">
                Measure user adoption, transaction volume, or community engagement. Even small metrics matter.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Source Attribution */}
      <p className="text-center text-xs text-muted-foreground mt-8">
        Information sourced from{" "}
        <a 
          href="https://docs.base.org/get-started/get-funded" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          docs.base.org
        </a>
      </p>
    </div>
  </MainLayout>
);

export default Opportunities;
