import { LessonLayout } from "@/components/lessons/LessonLayout";

const CreatorsGuide = () => {
  return (
    <LessonLayout
      lessonNumber={8}
      title="How Creators Can Use Base"
      prevLesson={{ path: "/lessons/what-base-is-not", title: "What Base Is NOT" }}
      nextLesson={{ path: "/lessons/safety-and-trust", title: "Safety and Trust" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Online creators can use Base to connect with fans and earn money in new ways. The technology enables direct relationships between creators and their audiences.
          </p>
          <p className="text-foreground">
            You do not need to be technical to use applications built on Base. Many tools are designed to be as simple as using social media.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>New revenue streams:</strong> Sell digital items, receive tips, offer exclusive access.
            </li>
            <li>
              <strong>Global audience:</strong> Accept support from fans in any country without payment barriers.
            </li>
            <li>
              <strong>Own your work:</strong> Digital items you create are permanently yours.
            </li>
            <li>
              <strong>Direct connection:</strong> No platform between you and your supporters.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            A photographer shares their work online. Using Base, they create digital versions of their best photos. Fans can buy these directly from the photographer. The photographer sets their own price. When someone buys, the money arrives within seconds.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Ways Creators Use Base
          </h2>
          
          <div className="space-y-4 text-muted-foreground mb-4">
            <div>
              <p className="font-medium text-foreground">Digital Collectibles</p>
              <p>Create unique digital items that fans can buy and own. These can be art, music, videos, or any digital content.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Direct Payments</p>
              <p>Receive money from fans anywhere in the world. No bank account restrictions. Payments arrive in seconds.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Exclusive Access</p>
              <p>Offer special content or experiences to supporters. Ownership of a digital item can unlock access to private channels.</p>
            </div>
            
            <div>
              <p className="font-medium text-foreground">Ongoing Royalties</p>
              <p>Set up rules so you earn money when your work is resold. If a fan sells your digital item to someone else, you automatically receive a percentage.</p>
            </div>
          </div>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Getting Started Steps</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
            <li>Set up a digital wallet (like Coinbase Wallet)</li>
            <li>Add a small amount of ETH for transaction fees</li>
            <li>Choose a platform that serves your type of content</li>
            <li>Create your first digital item</li>
            <li>Share with your audience</li>
          </ol>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Creators can use Base to sell digital items, receive direct payments, offer exclusive access, and earn ongoing royalties. Compared to traditional methods, Base offers lower fees, faster payments, and global access.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default CreatorsGuide;
