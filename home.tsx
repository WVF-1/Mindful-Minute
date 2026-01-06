'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpenText, Info } from 'lucide-react';

export function ReflectionJournal() {
  const [reflection, setReflection] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSave = () => {
    setIsSaving(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSaving(false);
          setReflection('');
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2">
            <BookOpenText className="text-accent"/>
            Temporal Journal
        </CardTitle>
        <CardDescription>
          Write a brief reflection on how the quote applies to your day.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Your thoughts and feelings..."
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows={5}
          disabled={isSaving}
        />
        <div className="flex items-center justify-between">
          <Button onClick={handleSave} disabled={!reflection.trim() || isSaving}>
            {isSaving ? 'Saving...' : 'Save Reflection'}
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground p-2 rounded-md bg-muted">
            <Info className="h-4 w-4" />
            <span>Your reflection will be deleted after 24 hours.</span>
          </div>
        </div>
        {isSaving && <Progress value={progress} className="mt-4" />}
      </CardContent>
    </Card>
  );
}