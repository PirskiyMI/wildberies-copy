import { lazy } from 'react';

export * from './counter-button';

export const Button = lazy(async () => {
   const { Button } = await import('./button');
   return { default: Button };
});
export const ButtonArrow = lazy(async () => {
   const { ButtonArrow } = await import('./button-arrow');
   return { default: ButtonArrow };
});
export const DeleteButton = lazy(async () => {
   const { DeleteButton } = await import('./delete-button');
   return { default: DeleteButton };
});
export const DeleteButtonSmall = lazy(async () => {
   const { DeleteButtonSmall } = await import('./delete-button-small');
   return { default: DeleteButtonSmall };
});
export const FavoriteButton = lazy(async () => {
   const { FavoriteButton } = await import('./favorite-button');
   return { default: FavoriteButton };
});
