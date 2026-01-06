import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="flex flex-col items-center justify-center space-y-8 max-w-sm w-full text-center">
        <div className="flex flex-col items-center space-y-4">
          <Logo className="h-16 w-16 text-primary" />
          <h1 className="text-5xl font-headline text-primary">Mindful Moment</h1>
          <p className="text-lg text-foreground/80">
            Your daily dose of calm and inspiration.
          </p>
        </div>

        <div className="w-full pt-8">
          <Button asChild size="lg" className="w-full">
            <Link href="/home">Enter the App</Link>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            In a real app, this would be a sign-in button.
          </p>
        </div>
      </div>
      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Mindful Moment. All rights reserved.</p>
      </footer>
    </main>
  );
}