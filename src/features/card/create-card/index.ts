import { lazy } from 'react';

export const CreateCard = lazy(async () => {
   const { CreateCard } = await import('./ui');
   return { default: CreateCard };
});
