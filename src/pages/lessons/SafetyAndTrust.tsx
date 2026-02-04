import { LessonLayout } from "@/components/lessons/LessonLayout";

const SafetyAndTrust = () => {
  return (
    <LessonLayout
      lessonNumber={9}
      title="Safety, Trust, and Transparency on Base"
      prevLesson={{ path: "/lessons/creators-guide", title: "How Creators Can Use Base" }}
      nextLesson={{ path: "/lessons/resources", title: "Where to Learn More" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Security is important when dealing with money and digital assets. Base is designed with multiple layers of protection.
          </p>
          <p className="text-foreground mb-3">
            Base inherits security from Ethereum, one of the most tested blockchain networks. All transactions are recorded publicly, which creates transparency.
          </p>
          <p className="text-foreground">
            However, you are also responsible for your own safety. Understanding how to protect yourself is essential.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Protect your earnings:</strong> Understanding security helps you keep your money safe.
            </li>
            <li>
              <strong>Build trust with fans:</strong> You can explain to fans why the technology is secure.
            </li>
            <li>
              <strong>Avoid scams:</strong> Knowing how the system works helps you spot fraudulent offers.
            </li>
            <li>
              <strong>Transparency:</strong> Your fans can verify transactions, building trust in your business.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            A creator receives a message claiming to be from a wallet company, asking for their secret recovery phrase. The creator, having learned about security, knows that legitimate services never ask for this information. They ignore the scam attempt and keep their funds safe.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Security on Base
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">How Base Is Secured</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Transactions are processed on Base first</li>
            <li>Batches of transactions are sent to Ethereum regularly</li>
            <li>Ethereum stores the permanent record</li>
            <li>Thousands of computers around the world verify the data</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Your Safety Responsibilities</h3>
          <div className="space-y-3 text-muted-foreground mb-4">
            <div>
              <p className="font-medium text-foreground">Protect your recovery phrase</p>
              <p>Your wallet has a recovery phrase (usually 12 or 24 words). Never share this with anyone.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Verify before you sign</p>
              <p>When an application asks you to approve a transaction, read what it says.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Start small</p>
              <p>When trying something new, use small amounts first until you understand how it works.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Use trusted applications</p>
              <p>Stick to well-known applications with good reputations.</p>
            </div>
          </div>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Common Scam Types to Avoid</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Phishing: Fake websites or messages asking for your recovery phrase</li>
            <li>Fake giveaways: "Send money to receive more back" - this never works</li>
            <li>Impersonation: Someone pretending to be support staff</li>
            <li>Too good to be true: Promises of guaranteed high returns</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base is secured through its connection to Ethereum. However, you must also protect yourself by guarding your recovery phrase, verifying transactions, and avoiding common scams.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default SafetyAndTrust;
