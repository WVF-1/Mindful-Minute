'use client';

import { useState, useEffect } from 'react';
import { Flame, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

type StreakCounterProps = {
  streak: number;
};

export function StreakCounter({ streak }: StreakCounterProps) {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm">
      <Flame className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold text-foreground">{streak}</span>
      <span className="text-sm text-muted-foreground">day streak</span>
      <div className="pl-2">
        {isDay ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-400" />}
      </div>
    </div>
  );
}