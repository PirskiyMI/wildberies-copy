import { lazy } from 'react';

export const SetCard = lazy(async () => {
   const { SetCardContainer } = await import('./set-card');
   return { default: SetCardContainer };
});
export const SetCardInBasket = lazy(async () => {
   const { SetCardInBasketContainer } = await import('./set-card-in-basket');
   return { default: SetCardInBasketContainer };
});
