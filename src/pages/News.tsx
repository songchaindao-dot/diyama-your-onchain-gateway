import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Newspaper, Calendar, Megaphone, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "The Base App Is Now Open To Everyone, Everywhere",
    description: "The new Base App is available in more than 140 countries worldwide. An everything app for social, trading, and payments with countless ways to earn. Download it today to discover, connect, and grow onchain.",
    date: "December 2025",
    source: "blog.base.org",
    url: "https://blog.base.org/baseapp",
    type: "Global Launch",
    highlight: true
  },
  {
    title: "Music Ownership for Fans & Artists Arrives on Base",
    description: "$ongChainn brings shared music ownership to Base - where fans and musicians co-own tracks together. Stream curated music, join community Town Squares, and 'Build culture before ownership' onchain.",
    date: "2025",
    source: "songchainn.xyz",
    url: "https://www.songchainn.xyz",
    type: "Music & Creators",
    highlight: true
  },
  {
    title: "Base's Next Chapter: Everything Announced At A New Day One",
    description: "Base is evolving to be more than a chain. Introducing the Base app (formerly Coinbase Wallet), an everything app to create, earn, trade, and discover onchain.",
    date: "July 2025",
    source: "blog.base.org",
    url: "https://blog.base.org/a-new-day-one",
    type: "Major Announcement",
    highlight: false
  },
  {
    title: "Coinbase and Shopify Bring USDC Payments on Base",
    description: "USDC payments on Base now available to millions of Shopify merchants worldwide, enabling fast, low-cost crypto payments for e-commerce.",
    date: "2025",
    source: "coinbase.com",
    url: "https://www.coinbase.com/blog/coinbase-and-shopify-bring-usdc-payments-on-base-to-millions-of-merchants-worldwide",
    type: "Partnership"
  },
  {
    title: "Base Exploring Native Token Launch",
    description: "Base is exploring the launch of a native token, driven by ecosystem growth and decentralization goals. A significant shift from previous stance.",
    date: "2025",
    source: "PANews",
    url: "https://www.panewslab.com/en/articles/31b49af0-fbae-4f78-a0b2-54136e0868f1",
    type: "Token News"
  },
  {
    title: "Base Eyes $100B in Assets and 25M Users On-Chain",
    description: "Base sets ambitious 2025 goals: $100 billion in assets and 25 million users onchain, positioning itself as a leader in the L2 space.",
    date: "2025",
    source: "The Defiant",
    url: "https://thedefiant.io/news/defi/base-eyes-usd100b-in-assets-and-25m-users-on-chain-in-2025",
    type: "Goals"
  },
  {
    title: "Base Ecosystem Fund Announces First Six Investments",
    description: "The Base Ecosystem Fund, led by Coinbase Ventures, announces investments in Avantis, BSX, Onboard, OpenCover, Paragraph, and Truflation.",
    date: "2024",
    source: "blog.base.org",
    url: "https://blog.base.org/base-ecosystem-fund-announces-first-six-investments",
    type: "Investments"
  },
  {
    title: "Request for Builders",
    description: "Base launched as a secure, low-cost, developer-friendly Ethereum L2 with a vision to bring the next billion users onchain.",
    date: "March 2023",
    source: "blog.base.org",
    url: "https://blog.base.org/request-for-builders",
    type: "Launch"
  }
];

const officialChannels = [
  {
    name: "Base Blog",
    description: "Official announcements and updates",
    url: "https://blog.base.org",
    icon: Newspaper
  },
  {
    name: "@base",
    description: "Official Base Twitter/X account",
    url: "https://x.com/base",
    icon: Megaphone
  },
  {
    name: "Base Status",
    description: "Network status and incidents",
    url: "https://status.base.org",
    icon: Calendar
  }
];

const News = () => (
  <MainLayout>
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-bold gradient-text mb-3">
          Base News
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Latest announcements, updates, and developments from the Base ecosystem. 
          Stay informed with official news from base.org and Coinbase.
        </p>
      </div>

      {/* Official Channels */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {officialChannels.map((channel, index) => {
          const IconComponent = channel.icon;
          return (
            <a 
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors h-full">
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">{channel.name}</p>
                  <p className="text-xs text-muted-foreground">{channel.description}</p>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>

      {/* News Items */}
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Newspaper className="h-5 w-5 text-primary" />
        Recent News
      </h2>

      <div className="space-y-4">
        {newsItems.map((news, index) => (
          <Card 
            key={index} 
            className={`border-border/50 hover:border-primary/30 transition-colors ${
              news.highlight ? 'bg-primary/5 border-primary/20' : 'bg-card/80'
            }`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={news.highlight ? "default" : "secondary"} className="text-xs">
                      {news.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{news.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm mb-3">
                {news.description}
              </CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Source: {news.source}
                </span>
                <a 
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  Read More <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* More News CTA */}
      <Card className="mt-8 bg-card/80 border-border/50">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Follow official Base channels for the latest announcements and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://blog.base.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-primary hover:underline"
            >
              Base Blog <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="https://x.com/base" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-primary hover:underline"
            >
              @base on X <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Source Attribution */}
      <p className="text-center text-xs text-muted-foreground mt-8">
        News sourced from{" "}
        <a 
          href="https://blog.base.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          blog.base.org
        </a>
        {" "}and official Coinbase announcements
      </p>
    </div>
  </MainLayout>
);

export default News;
