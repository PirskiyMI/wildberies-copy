import { lazy } from 'react';

export const ToggleProductToOrder = lazy(async () => {
   const { ToggleProductToOrderContainer } = await import('./container');
   return { default: ToggleProductToOrderContainer };
});
