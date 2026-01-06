'use server';

import {
  personalizeQuoteDelivery,
  type PersonalizeQuoteDeliveryInput,
} from '@/ai/flows/personalize-quote-delivery';

export async function getPersonalizedFeedback(
  data: Omit<PersonalizeQuoteDeliveryInput, 'userPreferences'>,
  userPreferences: PersonalizeQuoteDeliveryInput['userPreferences']
) {
  try {
    const input: PersonalizeQuoteDeliveryInput = {
      ...data,
      userPreferences: userPreferences,
    };
    const result = await personalizeQuoteDelivery(input);
    return { success: true, feedback: result.feedback };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to get feedback from AI.' };
  }
}