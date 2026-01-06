'use server';

/**
 * @fileOverview This file defines a Genkit flow to personalize quote delivery based on user ratings.
 *
 * It includes:
 * - `personalizeQuoteDelivery`: The main function to trigger the flow.
 * - `PersonalizeQuoteDeliveryInput`: The input type for the function.
 * - `PersonalizeQuoteDeliveryOutput`: The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeQuoteDeliveryInputSchema = z.object({
  quote: z.string().describe('The quote that was delivered to the user.'),
  emotionalImpactRating: z.number().int().min(1).max(5).describe('How the quote made the user feel (1-5 scale).'),
  personalRelevanceRating: z.number().int().min(1).max(5).describe('How applicable the quote is to the user’s current life (1-5 scale).'),
  actionabilityRating: z.number().int().min(1).max(5).describe('Whether the quote sparked new thoughts or actions (1-5 scale).'),
  userPreferences: z.string().optional().describe('A stringified JSON of the user preferences for quote categories'),
});
export type PersonalizeQuoteDeliveryInput = z.infer<typeof PersonalizeQuoteDeliveryInputSchema>;

const PersonalizeQuoteDeliveryOutputSchema = z.object({
  feedback: z.string().describe('Feedback on the quote ratings and how they will influence future quote delivery.'),
});
export type PersonalizeQuoteDeliveryOutput = z.infer<typeof PersonalizeQuoteDeliveryOutputSchema>;

export async function personalizeQuoteDelivery(input: PersonalizeQuoteDeliveryInput): Promise<PersonalizeQuoteDeliveryOutput> {
  return personalizeQuoteDeliveryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeQuoteDeliveryPrompt',
  input: {schema: PersonalizeQuoteDeliveryInputSchema},
  output: {schema: PersonalizeQuoteDeliveryOutputSchema},
  prompt: `You are a personalization expert for the Mindful Moment app, and your job is to improve the user experience. A user has just rated a quote with the following ratings:\n\nQuote: {{{quote}}}\nEmotional Impact: {{{emotionalImpactRating}}}\nPersonal Relevance: {{{personalRelevanceRating}}}\nActionability: {{{actionabilityRating}}}\nUser Preferences: {{{userPreferences}}}\n\nBased on these ratings, and the user's past preferences, provide feedback to the user on how these ratings will influence future quote delivery. Acknowledge the ratings and explain how the app will use this information to personalize their experience further. Suggest categories the user may want to explore further. Keep the response short and conversational.\n\nFormat your response as a single paragraph.`,
});

const personalizeQuoteDeliveryFlow = ai.defineFlow(
  {
    name: 'personalizeQuoteDeliveryFlow',
    inputSchema: PersonalizeQuoteDeliveryInputSchema,
    outputSchema: PersonalizeQuoteDeliveryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
