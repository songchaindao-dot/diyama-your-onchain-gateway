import { LessonLayout } from "@/components/lessons/LessonLayout";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  return (
    <LessonLayout
      lessonNumber={10}
      title="Where to Learn More"
      prevLesson={{ path: "/lessons/safety-and-trust", title: "Safety and Trust" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            This course covers the basics. To continue learning, you should use official resources directly from Base and Coinbase.
          </p>
          <p className="text-foreground">
            Official sources are the most reliable. They are updated regularly and contain accurate information.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Stay updated:</strong> Technology changes. Official sources have the latest information.
            </li>
            <li>
              <strong>Avoid misinformation:</strong> Many unofficial sources contain errors or outdated content.
            </li>
            <li>
              <strong>Go deeper:</strong> Learn advanced topics when you are ready.
            </li>
            <li>
              <strong>Get support:</strong> Official channels can help if you have problems.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            A creator wants to set up a way for fans to send tips. They visit base.org and find documentation about different applications. They compare options, read how each one works, and choose the one that fits their needs.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Official Resources
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Base Official Website</h3>
              <p className="text-muted-foreground mb-3">
                The main source for all information about Base. Contains documentation, guides, and announcements.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://base.org', '_blank')}
              >
                Visit base.org
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Base Documentation</h3>
              <p className="text-muted-foreground mb-3">
                Technical documentation for understanding how Base works.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://docs.base.org', '_blank')}
              >
                Visit docs.base.org
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Coinbase Wallet</h3>
              <p className="text-muted-foreground mb-3">
                The wallet application built by Coinbase. Easy to set up and works well with Base.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.coinbase.com/wallet', '_blank')}
              >
                Get Coinbase Wallet
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Base Bridge</h3>
              <p className="text-muted-foreground mb-3">
                The official tool for moving assets to Base from other networks.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://bridge.base.org', '_blank')}
              >
                Visit Base Bridge
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <h3 className="font-semibold text-foreground mt-8 mb-2">Tips for Continued Learning</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Bookmark the official documentation and check it when you have questions</li>
            <li>Follow official Base social media accounts for updates</li>
            <li>Start with small experiments before committing larger amounts</li>
            <li>Join official community channels to learn from other users</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-2 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4 text-center">
            Course Complete
          </h2>
          <p className="text-foreground text-center mb-4">
            You have completed all 10 lessons. You now understand the basics of Base and how online creators can use it.
          </p>
          <p className="text-muted-foreground text-center">
            Remember: Start small, use official resources, and keep learning.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default Resources;
