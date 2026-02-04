import { MainLayout } from "@/components/layout/MainLayout";
import { LearnHero } from "@/components/learn/LearnHero";
import { TheProblem } from "@/components/learn/TheProblem";
import { TheSolution } from "@/components/learn/TheSolution";
import { RealExamples } from "@/components/learn/RealExamples";
import { KeyConcepts } from "@/components/learn/KeyConcepts";
import { GettingStarted } from "@/components/learn/GettingStarted";
import { WhyBase } from "@/components/learn/WhyBase";
import { LearnCTA } from "@/components/learn/LearnCTA";
import { LessonsSection } from "@/components/learn/LessonsSection";

const Learn = () => (
  <MainLayout>
    <div className="max-w-7xl mx-auto">
      <LearnHero />
      <LessonsSection />
      <TheProblem />
      <TheSolution />
      <RealExamples />
      <KeyConcepts />
      <GettingStarted />
      <WhyBase />
      <LearnCTA />
    </div>
  </MainLayout>
);

export default Learn;
