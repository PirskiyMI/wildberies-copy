import { lazy } from 'react';

export * from './search-field';

export const Field = lazy(async () => {
   const { Field } = await import('./form-field');
   return { default: Field };
});
