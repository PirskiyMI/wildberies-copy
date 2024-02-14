import { lazy } from 'react';

export const Field = lazy(async () => {
   const { Field } = await import('./form-field');
   return { default: Field };
});
export const SearchField = lazy(async () => {
   const { SearchField } = await import('./search-field');
   return { default: SearchField };
});
