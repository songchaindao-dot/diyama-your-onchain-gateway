import { ReactNode } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LessonLayoutProps {
  children: ReactNode;
  lessonNumber: number;
  title: string;
  prevLesson?: { path: string; title: string };
  nextLesson?: { path: string; title: string };
}

export function LessonLayout({ 
  children, 
  lessonNumber, 
  title,
  prevLesson,
  nextLesson 
}: LessonLayoutProps) {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/learn" 
            className="text-primary hover:underline flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learn
          </Link>
        </div>

        <div className="mb-8">
          <span className="text-sm font-medium text-muted-foreground">
            Lesson {lessonNumber} of 10
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            {title}
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          {children}
        </div>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
          {prevLesson ? (
            <Link to={prevLesson.path}>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevLesson.title}</span>
                <span className="sm:hidden">Previous</span>
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          {nextLesson ? (
            <Link to={nextLesson.path}>
              <Button className="flex items-center gap-2 bg-primary text-primary-foreground">
                <span className="hidden sm:inline">{nextLesson.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <Link to="/learn">
              <Button className="flex items-center gap-2 bg-primary text-primary-foreground">
                Complete Course
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
