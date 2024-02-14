import { lazy } from 'react';

export const CartTile = lazy(async () => {
   const { CartTile } = await import('./cart-tile');
   return { default: CartTile };
});
export const ProfileTile = lazy(async () => {
   const { ProfileTile } = await import('./profile-tile');
   return { default: ProfileTile };
});
