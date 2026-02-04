import { LessonLayout } from "@/components/lessons/LessonLayout";

const HowBaseWorks = () => {
  return (
    <LessonLayout
      lessonNumber={3}
      title="How Base Works"
      prevLesson={{ path: "/lessons/who-built-base", title: "Who Built Base" }}
      nextLesson={{ path: "/lessons/base-and-ethereum", title: "Base and Ethereum" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Base processes transactions in batches. Instead of recording every single action one by one, it groups many actions together. This grouped batch is then recorded on Ethereum.
          </p>
          <p className="text-foreground">
            This process is called a "rollup." It makes transactions faster and cheaper while still using Ethereum's security.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Fast confirmations:</strong> Your transactions complete in seconds, not minutes or hours.
            </li>
            <li>
              <strong>Low fees:</strong> Because many transactions are bundled together, the cost is split among users.
            </li>
            <li>
              <strong>Reliable:</strong> The system processes thousands of transactions without slowing down.
            </li>
            <li>
              <strong>Secure:</strong> Even though Base is fast, it still uses Ethereum's strong security.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            Imagine a postal service. Instead of sending one letter at a time in separate trucks, they collect many letters and send them together in one truck. This is more efficient. Base does the same thing with digital transactions.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Deeper Explanation
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">What Is a Rollup?</h3>
          <p className="text-muted-foreground mb-4">
            A rollup is a way to process transactions off the main blockchain, then send a summary back to it. Base uses a type called an "optimistic rollup." This means transactions are assumed to be valid unless someone proves otherwise.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Step by Step Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
            <li>You send a transaction on Base</li>
            <li>Base collects your transaction along with many others</li>
            <li>These transactions are processed and organized into a batch</li>
            <li>The batch is compressed and sent to Ethereum</li>
            <li>Ethereum records this batch permanently</li>
          </ol>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base works by bundling many transactions together and sending them to Ethereum in batches. This rollup technology makes Base fast and affordable.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default HowBaseWorks;
