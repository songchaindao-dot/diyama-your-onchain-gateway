import { LessonLayout } from "@/components/lessons/LessonLayout";

const BaseAndEthereum = () => {
  return (
    <LessonLayout
      lessonNumber={4}
      title="Base and Ethereum: How They Are Connected"
      prevLesson={{ path: "/lessons/how-base-works", title: "How Base Works" }}
      nextLesson={{ path: "/lessons/why-low-cost", title: "Why Base Is Low Cost" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Ethereum is a large blockchain network that has been running since 2015. It is one of the most secure and widely used blockchains in the world.
          </p>
          <p className="text-foreground mb-3">
            Base is built on top of Ethereum. It uses Ethereum as its foundation for security. Think of Ethereum as the ground floor of a building, and Base as a floor above it.
          </p>
          <p className="text-foreground">
            This connection means Base inherits Ethereum's security while being able to process transactions faster and cheaper.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Proven security:</strong> Ethereum has protected billions of dollars for years. Base uses this same security.
            </li>
            <li>
              <strong>Large ecosystem:</strong> Many tools and applications already work with Ethereum. These same tools work with Base.
            </li>
            <li>
              <strong>Stable foundation:</strong> Ethereum is supported by thousands of developers worldwide.
            </li>
            <li>
              <strong>Asset compatibility:</strong> Digital items on Base can be moved to Ethereum if needed.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            Imagine you live in an apartment building. The building has strong security at the main entrance. Your apartment on the 5th floor benefits from this security without needing its own security guard. Base is like that 5th-floor apartment.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Deeper Explanation
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">What Is Ethereum?</h3>
          <p className="text-muted-foreground mb-4">
            Ethereum is a blockchain network that allows people to build applications and store digital assets. It was one of the first blockchains to support applications beyond simple money transfers.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">What Is a Layer 2?</h3>
          <p className="text-muted-foreground mb-4">
            A Layer 2 is a network built on top of another blockchain (Layer 1). Base is a Layer 2 that settles on Ethereum. This means Base handles the fast processing, while Ethereum provides the final record and security.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-2 font-semibold text-foreground">Ethereum (Layer 1)</th>
                  <th className="text-left py-2 font-semibold text-foreground">Base (Layer 2)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-2">Main purpose</td>
                  <td className="py-2">Security and final record</td>
                  <td className="py-2">Fast, cheap transactions</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Transaction speed</td>
                  <td className="py-2">12-15 seconds</td>
                  <td className="py-2">2-3 seconds</td>
                </tr>
                <tr>
                  <td className="py-2">Transaction cost</td>
                  <td className="py-2">Several dollars</td>
                  <td className="py-2">Less than one cent</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base is connected to Ethereum as a Layer 2 network. Ethereum provides security and permanent records. Base provides speed and low costs.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default BaseAndEthereum;
