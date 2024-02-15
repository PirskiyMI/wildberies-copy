import { lazy } from 'react';

export const DesktopCounterButton = lazy(async () => {
   const { CounterButton } = await import('./desktop');
   return { default: CounterButton };
});
export const MobileCounterButton = lazy(async () => {
   const { CounterButton } = await import('./mobile');
   return { default: CounterButton };
});
