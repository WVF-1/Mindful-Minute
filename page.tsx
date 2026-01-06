import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StreakCounter } from "@/components/home/StreakCounter";
import { RatingSystem } from "@/components/home/RatingSystem";
import { ReflectionJournal } from "@/components/home/ReflectionJournal";
import { allQuotes, getDailyQuote, mockUser } from "@/lib/data";
import { Bookmark, Lightbulb } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const dailyQuote = getDailyQuote();

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-headline text-primary">Your Mindful Moment</h1>
        <StreakCounter streak={mockUser.streak} />
      </header>
      
      <main className="space-y-8">
        <Card className="overflow-hidden shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl tracking-wide">{dailyQuote.category}</CardTitle>
            <CardDescription>Your daily quote for inspiration and growth.</CardDescription>
          </CardHeader>
          <CardContent>
            <blockquote className="space-y-4">
              <p className="text-2xl font-body leading-relaxed text-foreground md:text-3xl">
                &ldquo;{dailyQuote.text}&rdquo;
              </p>
              <footer className="text-right text-lg font-bold text-primary font-headline">
                &mdash; {dailyQuote.author}
              </footer>
            </blockquote>
          </CardContent>
          <CardFooter className="bg-muted/50 px-6 py-4">
            <Button variant="ghost" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Save to Collection
            </Button>
          </CardFooter>
        </Card>

        <Separator />

        <RatingSystem quote={dailyQuote} userPreferences={mockUser.preferences} />
        
        <Separator />
        
        <ReflectionJournal />
      </main>
    </div>
  );
}