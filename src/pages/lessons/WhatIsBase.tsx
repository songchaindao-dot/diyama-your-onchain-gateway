import { LessonLayout } from "@/components/lessons/LessonLayout";

const WhatIsBase = () => {
  return (
    <LessonLayout
      lessonNumber={1}
      title="What Is Base"
      nextLesson={{ path: "/lessons/who-built-base", title: "Who Built Base" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Base is a blockchain network. A blockchain is a type of digital record that stores information across many computers. This makes it very hard to change or delete.
          </p>
          <p className="text-foreground mb-3">
            Base is what developers call a "Layer 2" network. It runs on top of another blockchain called Ethereum. This connection makes Base secure while keeping costs low.
          </p>
          <p className="text-foreground">
            People use Base to send money, own digital items, and run applications without needing a bank or a company in the middle.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Direct payments:</strong> Receive money from fans anywhere in the world without payment processors taking large fees.
            </li>
            <li>
              <strong>True ownership:</strong> When you create something on Base, you own it. No platform can take it away from you.
            </li>
            <li>
              <strong>Low costs:</strong> Sending money or creating digital items on Base costs only a few cents.
            </li>
            <li>
              <strong>Open access:</strong> Anyone can use Base. There are no applications to fill out or approvals needed.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            A musician in Nigeria creates a song. They publish it on Base as a digital item. A fan in Japan buys it for a few dollars. The money goes directly to the musician within seconds. No record label, no streaming platform, no waiting weeks for payment. The musician keeps most of the money, and the fan truly owns a copy of the song.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Deeper Explanation
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">Clear Definition</h3>
          <p className="text-muted-foreground mb-4">
            Base is an Ethereum Layer 2 blockchain. According to base.org, it is designed to be secure, low-cost, and developer-friendly. It provides a way for people to use blockchain technology without paying high fees.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">How It Compares to Web2 Platforms</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-2 font-semibold text-foreground">Traditional Platform</th>
                  <th className="text-left py-2 font-semibold text-foreground">Base</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-2">Who controls your account</td>
                  <td className="py-2">The platform</td>
                  <td className="py-2">You</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Payment fees</td>
                  <td className="py-2">5-30%</td>
                  <td className="py-2">Less than 1 cent</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Payment speed</td>
                  <td className="py-2">Days to weeks</td>
                  <td className="py-2">Seconds</td>
                </tr>
                <tr>
                  <td className="py-2">Global access</td>
                  <td className="py-2">Limited by region</td>
                  <td className="py-2">Available worldwide</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base is a blockchain network that lets people send money and own digital items cheaply and quickly. It is built on Ethereum, which makes it secure. For creators, it offers a new way to connect with audiences and earn money without relying on traditional platforms.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default WhatIsBase;
