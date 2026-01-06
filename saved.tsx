import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { allQuotes, mockUser } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function SavedQuotesPage() {
  const savedQuotes = allQuotes.filter(q => mockUser.savedQuotes.includes(q.id));
  const maxSaved = 10;

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-headline text-primary">Saved Quotes</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your personal collection of inspiration. Curate wisely.
        </p>
      </header>

      <div className="mb-6">
        <div className="flex justify-between text-sm font-medium mb-1">
          <span>{savedQuotes.length} / {maxSaved} saved</span>
          <span>{maxSaved - savedQuotes.length} slots remaining</span>
        </div>
        <Progress value={(savedQuotes.length / maxSaved) * 100} />
      </div>

      {savedQuotes.length === 0 ? (
        <Card className="flex flex-col items-center justify-center text-center py-16">
          <CardHeader>
            <CardTitle className="font-headline">Your collection is empty</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Save quotes from the home screen to find them here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {savedQuotes.map((quote) => (
            <Card key={quote.id} className="overflow-hidden">
              <CardContent className="p-6">
                <blockquote className="space-y-3">
                  <p className="text-xl font-body leading-relaxed text-foreground">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <footer className="text-right text-md font-bold text-primary font-headline">
                    &mdash; {quote.author}
                  </footer>
                </blockquote>
              </CardContent>
              <CardFooter className="bg-muted/50 px-6 py-3 flex justify-end">
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}