import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";

const lessons = [
  {
    number: 1,
    title: "What Is Base",
    description: "A simple explanation of what Base is and why it exists.",
    path: "/lessons/what-is-base",
  },
  {
    number: 2,
    title: "Who Built Base",
    description: "The company and team behind Base.",
    path: "/lessons/who-built-base",
  },
  {
    number: 3,
    title: "How Base Works",
    description: "A simple explanation of how Base processes transactions.",
    path: "/lessons/how-base-works",
  },
  {
    number: 4,
    title: "Base and Ethereum",
    description: "How Base connects to Ethereum and why that matters.",
    path: "/lessons/base-and-ethereum",
  },
  {
    number: 5,
    title: "Why Base Is Low Cost",
    description: "How Base keeps transaction fees affordable.",
    path: "/lessons/why-low-cost",
  },
  {
    number: 6,
    title: "What People Can Build on Base",
    description: "The types of applications that run on Base.",
    path: "/lessons/what-you-can-build",
  },
  {
    number: 7,
    title: "What Base Is NOT",
    description: "Common misconceptions about Base, clarified.",
    path: "/lessons/what-base-is-not",
  },
  {
    number: 8,
    title: "How Creators Can Use Base",
    description: "Practical ways online creators can use Base.",
    path: "/lessons/creators-guide",
  },
  {
    number: 9,
    title: "Safety, Trust, and Transparency",
    description: "How Base approaches security and openness.",
    path: "/lessons/safety-and-trust",
  },
  {
    number: 10,
    title: "Where to Learn More",
    description: "Official resources to continue your learning.",
    path: "/lessons/resources",
  },
];

export function LessonsSection() {
  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4">
          Learning Base: A Simple Guide for Online Creators
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A free course that explains Base in plain English. No technical background needed. 
          Start from Lesson 1 or jump to any topic.
        </p>
      </motion.div>

      {/* Course Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-2xl mb-8 max-w-4xl mx-auto"
      >
        <h3 className="text-lg font-display font-bold text-foreground mb-4">
          What You Will Learn
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">What is Base?</p>
            <p className="text-muted-foreground">
              A blockchain network that is fast, affordable, and easy to use.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Who is this for?</p>
            <p className="text-muted-foreground">
              YouTubers, bloggers, artists, musicians, and any online creator.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Why should you care?</p>
            <p className="text-muted-foreground">
              New ways to earn money directly from fans worldwide.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Lessons List */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-display font-bold text-foreground mb-4">
          Course Lessons
        </h3>
        
        <div className="space-y-3">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={lesson.path}
                className="block glass-card p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-sm font-bold text-primary">
                      {lesson.number}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Lesson {lesson.number}: {lesson.title}
                    </h4>
                    <p className="text-sm text-muted-foreground truncate">
                      {lesson.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Source Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          All information comes from official Base documentation at{" "}
          <a 
            href="https://base.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            base.org
          </a>
        </p>
      </div>
    </section>
  );
}
