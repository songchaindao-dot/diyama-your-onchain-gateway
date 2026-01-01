import { motion } from "framer-motion";
import { Coins, Sparkles, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const concepts = [
  {
    id: "minting",
    icon: Sparkles,
    title: "What's Minting?",
    summary: "Creating a permanent, ownable copy of your digital content on the blockchain.",
    details: [
      {
        question: "Think of it like this:",
        answer: "When you mint something, you're essentially creating a digital certificate of authenticity that lives forever on the blockchain. It's like publishing a book, but the record of who owns each copy can never be erased or faked.",
      },
      {
        question: "How does it work?",
        answer: "You upload your content (music, art, video, etc.) and 'mint' it on a platform like Zora. This creates an NFT - a unique token that represents your work. Fans can then collect (buy) these mints to support you directly.",
      },
      {
        question: "Why should I care?",
        answer: "Every time someone mints your work, you get paid instantly. No waiting 60-90 days for royalty checks. No platform taking half. Just direct payment from fan to creator.",
      },
      {
        question: "Real example:",
        answer: "A musician releases a song on Zora for $1 per mint. 500 fans mint it = $500 direct to the artist. On Spotify, they'd need 166,000+ streams for the same amount.",
      },
    ],
  },
  {
    id: "creator-coins",
    icon: Coins,
    title: "What's a Creator Coin?",
    summary: "Your own personal cryptocurrency that fans can invest in to support your growth.",
    details: [
      {
        question: "The simple version:",
        answer: "Imagine if your fans could buy 'shares' in your success. When you grow and succeed, the value of those shares goes up. That's essentially what a Creator Coin does.",
      },
      {
        question: "How do they work?",
        answer: "You launch your own coin on Base. Fans buy your coin to show support. As more people buy, the price goes up. Early supporters benefit from your growth. You can offer coin holders special perks, early access, or exclusive content.",
      },
      {
        question: "Why is this powerful?",
        answer: "It aligns incentives. Your biggest fans become invested in your success - literally. They'll share your work, promote you, and help you grow because they benefit too.",
      },
      {
        question: "Getting started:",
        answer: "Platforms like Wow.xyz and Clanker make it easy to launch your own Creator Coin on Base. No coding required.",
      },
    ],
  },
];

export function KeyConcepts() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
          Key Concepts Explained
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The building blocks of the onchain creator economy. Click to dive deeper.
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value={concept.id} className="border-none">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-primary/5">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <concept.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {concept.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {concept.summary}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    {concept.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="p-4 rounded-xl bg-background/50">
                        <p className="text-sm font-medium text-primary mb-2">
                          {detail.question}
                        </p>
                        <p className="text-foreground">
                          {detail.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
