import { lazy } from 'react';

export const DeleteCard = lazy(async () => {
   const { DeleteCard } = await import('./ui');
   return { default: DeleteCard };
});
