import { lazy } from 'react';

export const Button = lazy(async () => {
   const { Button } = await import('./button');
   return { default: Button };
});
export const ButtonArrow = lazy(async () => {
   const { ButtonArrow } = await import('./button-arrow');
   return { default: ButtonArrow };
});
export const CountButton = lazy(async () => {
   const { CountButton } = await import('./count-button');
   return { default: CountButton };
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
