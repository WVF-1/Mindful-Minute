import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allBadges, mockUser } from "@/lib/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lock, CheckCircle2 } from "lucide-react";

export default function BadgesPage() {
  const earnedBadges = new Set(mockUser.achievedBadges);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-headline text-primary">Your Achievements</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Celebrate your mindfulness journey and track your progress.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {allBadges.map((badge) => {
          const isEarned = earnedBadges.has(badge.id);
          return (
            <Card
              key={badge.id}
              className={cn(
                "flex flex-col items-center justify-center text-center p-4 transition-all duration-300",
                isEarned ? "border-primary/50 bg-primary/5" : "bg-muted/50"
              )}
            >
              <div className="relative">
                <Image
                  src={badge.icon}
                  alt={badge.title}
                  width={100}
                  height={100}
                  data-ai-hint="badge icon"
                  className={cn("rounded-full", !isEarned && "grayscale opacity-50")}
                />
                {isEarned ? (
                  <CheckCircle2 className="absolute -bottom-1 -right-1 h-6 w-6 text-green-500 bg-card rounded-full p-0.5" />
                ) : (
                  <Lock className="absolute -bottom-1 -right-1 h-6 w-6 text-muted-foreground bg-card rounded-full p-1" />
                )}
              </div>
              <CardHeader className="p-2 pb-0">
                <CardTitle className="font-headline text-lg">{badge.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-sm text-muted-foreground">{isEarned ? badge.description : badge.criteria}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}