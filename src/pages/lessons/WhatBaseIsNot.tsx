import { LessonLayout } from "@/components/lessons/LessonLayout";

const WhatBaseIsNot = () => {
  return (
    <LessonLayout
      lessonNumber={7}
      title="What Base Is NOT"
      prevLesson={{ path: "/lessons/what-you-can-build", title: "What You Can Build" }}
      nextLesson={{ path: "/lessons/creators-guide", title: "How Creators Can Use Base" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            There are many misconceptions about blockchain technology. It is important to understand what Base is not, so you can make informed decisions.
          </p>
          <p className="text-foreground">
            Base is a blockchain network for building applications. It is not several things that people commonly confuse it with.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Clear expectations:</strong> Understanding what Base is not helps you avoid mistakes.
            </li>
            <li>
              <strong>Better decisions:</strong> You can evaluate opportunities more accurately.
            </li>
            <li>
              <strong>Avoid scams:</strong> Knowing the facts helps you identify false claims.
            </li>
            <li>
              <strong>Professional knowledge:</strong> You can explain blockchain accurately to your audience.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            Someone tells a creator that Base will make them rich overnight. The creator, having read this lesson, knows that Base is technology, not an investment scheme. They can evaluate opportunities based on what they actually offer, not false promises.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: What Base Is NOT
          </h2>
          
          <div className="space-y-4 text-muted-foreground mb-4">
            <div>
              <p className="font-medium text-foreground">Base is not a cryptocurrency</p>
              <p>Base is a network, not a coin or token. The network uses ETH (Ethereum's currency) for transaction fees. Base itself is not something you buy or sell.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Base is not a way to get rich quick</p>
              <p>Base is technology. Like any technology, it can be used to build useful things. It does not automatically generate money.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Base is not anonymous</p>
              <p>Transactions on Base are recorded publicly. Anyone can see transaction history on the blockchain.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Base is not illegal</p>
              <p>Base is a legitimate technology platform. Coinbase, a regulated public company, built it.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Base is not only for tech experts</p>
              <p>While building on Base requires technical skills, using Base applications can be straightforward.</p>
            </div>
          </div>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base is a blockchain network, not a cryptocurrency or investment scheme. Understanding these facts helps you evaluate opportunities accurately and avoid common scams.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default WhatBaseIsNot;
