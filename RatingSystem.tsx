'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getPersonalizedFeedback } from '@/app/(app)/home/actions';
import type { Quote, UserData } from '@/lib/types';
import { Lightbulb } from 'lucide-react';

const ratingSchema = z.object({
  emotionalImpactRating: z.number().min(1).max(5),
  personalRelevanceRating: z.number().min(1).max(5),
  actionabilityRating: z.number().min(1).max(5),
});

type RatingFormValues = z.infer<typeof ratingSchema>;

interface RatingSystemProps {
  quote: Quote;
  userPreferences: UserData['preferences'];
}

export function RatingSystem({ quote, userPreferences }: RatingSystemProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<RatingFormValues>({
    resolver: zodResolver(ratingSchema),
    defaultValues: {
      emotionalImpactRating: 3,
      personalRelevanceRating: 3,
      actionabilityRating: 3,
    },
  });

  async function onSubmit(data: RatingFormValues) {
    setIsSubmitting(true);
    const result = await getPersonalizedFeedback(
      {
        quote: quote.text,
        ...data,
      },
      JSON.stringify(userPreferences)
    );

    if (result.success) {
      toast({
        title: 'Thank You for Your Feedback!',
        description: result.feedback,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: result.error,
      });
    }
    setIsSubmitting(false);
  }

  const ratingLabels = {
    emotionalImpactRating: 'Emotional Impact',
    personalRelevanceRating: 'Personal Relevance',
    actionabilityRating: 'Actionability',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2">
            <Lightbulb className="text-accent"/>
            Rate this Quote
        </CardTitle>
        <CardDescription>Your feedback helps personalize your future quotes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {Object.keys(ratingLabels).map((key) => (
              <FormField
                key={key}
                control={form.control}
                name={key as keyof RatingFormValues}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{ratingLabels[key as keyof typeof ratingLabels]}: {field.value}</FormLabel>
                    <FormControl>
                      <Slider
                        min={1}
                        max={5}
                        step={1}
                        value={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Ratings'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
