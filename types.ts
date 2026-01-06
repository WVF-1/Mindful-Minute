export type QuoteCategory = 'motivation' | 'gratitude' | 'resilience' | 'growth' | 'wisdom' | 'happiness';

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: QuoteCategory;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  criteria: string;
}

export interface UserData {
  streak: number;
  lastActive: string | null;
  savedQuotes: string[]; // array of quote ids
  achievedBadges: string[]; // array of badge ids
  preferences: {
    categories: QuoteCategory[];
    schedule: {
      [day: string]: QuoteCategory | 'any';
    };
  };
  ratedQuotesCount: number;
  reflectionsWritten: number;
}