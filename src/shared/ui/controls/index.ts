import { lazy } from 'react';

export const Checkbox = lazy(async () => {
   const { Checkbox } = await import('./checkbox');
   return { default: Checkbox };
});
export const Radio = lazy(async () => {
   const { Radio } = await import('./radio');
   return { default: Radio };
});
export const Select = lazy(async () => {
   const { Select } = await import('./select');
   return { default: Select };
});
