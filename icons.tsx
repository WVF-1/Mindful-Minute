import { type QuoteCategory } from './types';
import { TrendingUp, Heart, Shield, Sprout, BrainCircuit, Smile } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export const categoryIcons: Record<
  QuoteCategory,
  ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
> = {
  motivation: TrendingUp,
  gratitude: Heart,
  resilience: Shield,
  growth: Sprout,
  wisdom: BrainCircuit,
  happiness: Smile,
};
