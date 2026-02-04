import { LessonLayout } from "@/components/lessons/LessonLayout";

const WhatYouCanBuild = () => {
  return (
    <LessonLayout
      lessonNumber={6}
      title="What People Can Build on Base"
      prevLesson={{ path: "/lessons/why-low-cost", title: "Why Base Is Low Cost" }}
      nextLesson={{ path: "/lessons/what-base-is-not", title: "What Base Is NOT" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Base is a platform where developers can build applications. These applications run on the blockchain, which means they are available to anyone, anywhere, at any time.
          </p>
          <p className="text-foreground">
            People build many types of applications on Base, including tools for payments, digital ownership, social features, and more.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>New tools for you:</strong> Developers are building applications specifically for creators on Base.
            </li>
            <li>
              <strong>Direct monetization:</strong> Applications let you earn money directly from your audience.
            </li>
            <li>
              <strong>Ownership features:</strong> You can create and sell digital items that fans truly own.
            </li>
            <li>
              <strong>Growing options:</strong> As more applications launch, you have more ways to use Base.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            A video creator makes tutorial videos. Using an application built on Base, they can sell access to exclusive content. Fans pay directly to the creator. The payment arrives in seconds. The creator does not need to wait for a platform to approve them.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Deeper Explanation
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">Types of Applications on Base</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Payment applications: Send and receive money globally</li>
            <li>Digital collectibles: Create and sell unique digital items</li>
            <li>Social applications: Connect with audiences in new ways</li>
            <li>Naming services: Get a readable name for your wallet address</li>
            <li>Creator tools: Platforms designed for artists, musicians, and content makers</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-4 mb-2">How This Differs from Traditional Platforms</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-2 font-semibold text-foreground">Traditional App</th>
                  <th className="text-left py-2 font-semibold text-foreground">Base App</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-2">Who can join</td>
                  <td className="py-2">Platform decides</td>
                  <td className="py-2">Anyone</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Your data</td>
                  <td className="py-2">Stored by company</td>
                  <td className="py-2">On public blockchain</td>
                </tr>
                <tr>
                  <td className="py-2">Payment processing</td>
                  <td className="py-2">Through intermediaries</td>
                  <td className="py-2">Direct to you</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base supports many types of applications including payment tools, digital collectibles, and creator platforms. These applications give creators new ways to earn money and connect with fans.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default WhatYouCanBuild;
