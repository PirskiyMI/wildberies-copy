import { lazy } from 'react';

export const SetCard = lazy(async () => {
   const { SetCard } = await import('./set-card');
   return { default: SetCard };
});
export const SetCardInBasket = lazy(async () => {
   const { SetCardInBasket } = await import('./set-card-in-basket');
   return { default: SetCardInBasket };
});
