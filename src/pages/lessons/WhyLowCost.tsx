import { LessonLayout } from "@/components/lessons/LessonLayout";

const WhyLowCost = () => {
  return (
    <LessonLayout
      lessonNumber={5}
      title="Why Base Is Low Cost"
      prevLesson={{ path: "/lessons/base-and-ethereum", title: "Base and Ethereum" }}
      nextLesson={{ path: "/lessons/what-you-can-build", title: "What You Can Build" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Every transaction on a blockchain requires a small fee. This fee pays for the computers that process and record your transaction.
          </p>
          <p className="text-foreground mb-3">
            On some blockchains, these fees can be expensive. On Ethereum, fees can sometimes cost several dollars for a single transaction.
          </p>
          <p className="text-foreground">
            Base keeps fees low by bundling many transactions together. Typical transactions on Base cost less than one cent.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Small sales become possible:</strong> You can sell a digital item for $1 and keep most of it.
            </li>
            <li>
              <strong>More fan interactions:</strong> Fans can support you with small amounts without losing money to fees.
            </li>
            <li>
              <strong>Testing is affordable:</strong> You can experiment and learn without worrying about expensive mistakes.
            </li>
            <li>
              <strong>Scale your work:</strong> As you grow, low fees mean more of your earnings stay with you.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            An artist wants to sell a digital sticker for $2. On a network with $5 fees, this would be impossible. The fee costs more than the item. On Base, the fee is less than $0.01. The artist sells the sticker for $2 and keeps almost all of it.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Deeper Explanation
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">How Base Keeps Costs Low</h3>
          <p className="text-muted-foreground mb-4">
            Base uses rollup technology. It collects many transactions and processes them together. The cost of recording data on Ethereum is shared among all users in that batch. This is like carpooling: everyone shares the cost of the trip.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Cost Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold text-foreground">Action</th>
                  <th className="text-left py-2 font-semibold text-foreground">Traditional Platform</th>
                  <th className="text-left py-2 font-semibold text-foreground">Base</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-2">Send $10 to someone</td>
                  <td className="py-2">$0.30 - $3.00</td>
                  <td className="py-2">Less than $0.01</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Create a digital item</td>
                  <td className="py-2">Platform fees vary</td>
                  <td className="py-2">Less than $0.01</td>
                </tr>
                <tr>
                  <td className="py-2">Receive payment from abroad</td>
                  <td className="py-2">3-5% currency fees</td>
                  <td className="py-2">Less than $0.01</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base keeps costs low by bundling transactions together and sharing the expense among users. For creators, this means more of your money stays with you.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default WhyLowCost;
