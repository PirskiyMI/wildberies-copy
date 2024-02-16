import { lazy } from 'react';

export const DesktopPaymentMethodPopUp = lazy(async () => {
   const { PaymentMethodPopUp } = await import('./desktop');
   return { default: PaymentMethodPopUp };
});
export const MobilePaymentMethodPopUp = lazy(async () => {
   const { PaymentMethodPopUp } = await import('./mobile');
   return { default: PaymentMethodPopUp };
});
