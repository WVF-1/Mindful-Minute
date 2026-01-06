import type { Quote, Badge, QuoteCategory, UserData } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const quoteCategories: QuoteCategory[] = [
  'motivation',
  'gratitude',
  'resilience',
  'growth',
  'wisdom',
  'happiness',
];

export const allQuotes: Quote[] = [
  { id: 'q1', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', category: 'motivation' },
  { id: 'q2', text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb', category: 'growth' },
  { id: 'q3', text: 'Your limitation is only your imagination.', author: 'Unknown', category: 'motivation' },
  { id: 'q4', text: 'Happiness is not something readymade. It comes from your own actions.', author: 'Dalai Lama', category: 'happiness' },
  { id: 'q5', text: 'The secret of getting ahead is getting started.', author: 'Mark Twain', category: 'motivation' },
  { id: 'q6', text: 'It’s not whether you get knocked down, it’s whether you get up.', author: 'Vince Lombardi', category: 'resilience' },
  { id: 'q7', text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu', category: 'growth' },
  { id: 'q8', text: 'Gratitude turns what we have into enough.', author: 'Anonymous', category: 'gratitude' },
  { id: 'q9', text: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates', category: 'wisdom' },
  { id: 'q10', text: 'Fall seven times and stand up eight.', author: 'Japanese Proverb', category: 'resilience' },
];

export const allBadges: Badge[] = [
  { id: 'b1', title: 'First Reflection', description: 'You wrote your first reflection!', icon: PlaceHolderImages.find(p => p.id === 'badge-first-reflection')?.imageUrl || '', criteria: 'Write 1 reflection' },
  { id: 'b2', title: '7-Day Streak', description: 'You have maintained a streak for 7 days!', icon: PlaceHolderImages.find(p => p.id === 'badge-7-day-streak')?.imageUrl || '', criteria: '7-day streak' },
  { id: 'b3', title: '30-Day Streak', description: 'You have maintained a streak for 30 days!', icon: PlaceHolderImages.find(p => p.id === 'badge-30-day-streak')?.imageUrl || '', criteria: '30-day streak' },
  { id: 'b4', title: 'Collector', description: 'You have saved 10 quotes.', icon: PlaceHolderImages.find(p => p.id === 'badge-10-quotes-saved')?.imageUrl || '', criteria: 'Save 10 quotes' },
  { id: 'b5', title: 'Connoisseur', description: 'You have rated 50 quotes.', icon: PlaceHolderImages.find(p => p.id === 'badge-50-quotes-rated')?.imageUrl || '', criteria: 'Rate 50 quotes' },
];

export const mockUser: UserData = {
  streak: 5,
  lastActive: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
  savedQuotes: ['q2', 'q4', 'q8'],
  achievedBadges: ['b1'],
  preferences: {
    categories: ['growth', 'gratitude', 'wisdom'],
    schedule: {
      monday: 'motivation',
      tuesday: 'any',
      wednesday: 'growth',
      thursday: 'any',
      friday: 'gratitude',
      saturday: 'any',
      sunday: 'wisdom',
    },
  },
  ratedQuotesCount: 25,
  reflectionsWritten: 3,
};

export const getDailyQuote = (): Quote => {
  // In a real app, this would be based on user preferences and date.
  // For now, return a static quote.
  return allQuotes[0];
};