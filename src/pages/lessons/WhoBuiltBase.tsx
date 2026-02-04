import { LessonLayout } from "@/components/lessons/LessonLayout";

const WhoBuiltBase = () => {
  return (
    <LessonLayout
      lessonNumber={2}
      title="Who Built Base"
      prevLesson={{ path: "/lessons/what-is-base", title: "What Is Base" }}
      nextLesson={{ path: "/lessons/how-base-works", title: "How Base Works" }}
    >
      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            What This Means
          </h2>
          <p className="text-foreground mb-3">
            Base was built by Coinbase. Coinbase is a publicly traded company based in the United States. It is one of the largest cryptocurrency exchanges in the world.
          </p>
          <p className="text-foreground">
            Coinbase created Base to give people an easy and affordable way to use blockchain technology. The company has been operating since 2012.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Why It Matters to Online Creators
          </h2>
          <ul className="list-disc list-inside space-y-3 text-foreground">
            <li>
              <strong>Established company:</strong> Coinbase has operated for over 10 years and serves millions of customers.
            </li>
            <li>
              <strong>Easy onboarding:</strong> Coinbase provides tools that make it simpler for new users to start using Base.
            </li>
            <li>
              <strong>Ongoing development:</strong> Having a well-funded company behind Base means continued improvements.
            </li>
            <li>
              <strong>Regulatory compliance:</strong> Coinbase operates within legal frameworks in many countries.
            </li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-primary">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Real-World Example
          </h2>
          <p className="text-foreground">
            Think of it like YouTube being built by Google. YouTube benefits from Google's resources, technology, and trust. Similarly, Base benefits from Coinbase's experience in handling money and building secure systems.
          </p>
        </section>

        <section className="glass-card p-6 rounded-2xl bg-muted/30">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Learn More: Deeper Explanation
          </h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">About Coinbase</h3>
          <p className="text-muted-foreground mb-4">
            Coinbase was founded in 2012. It became a publicly traded company on the NASDAQ stock exchange in 2021. The company provides services for buying, selling, and storing cryptocurrency.
          </p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">Key Facts</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Coinbase is headquartered in the United States</li>
            <li>The company serves customers in over 100 countries</li>
            <li>Coinbase is regulated by financial authorities in multiple jurisdictions</li>
            <li>Base launched in 2023</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Summary</h3>
          <p className="text-muted-foreground">
            Base was built by Coinbase, a large and established cryptocurrency company. This backing provides resources, stability, and trust.
          </p>
        </section>
      </div>
    </LessonLayout>
  );
};

export default WhoBuiltBase;
