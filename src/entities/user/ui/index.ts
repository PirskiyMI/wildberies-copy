import { lazy } from 'react';

export * from './user-info';
export * from './user-payment-card';

export const UserPaymentCardShort = lazy(async () => {
   const { UserPaymentCardShort } = await import('./user-payment-card-short');
   return { default: UserPaymentCardShort };
});
export const UserGender = lazy(async () => {
   const { UserGender } = await import('./user-gender');
   return { default: UserGender };
});
export const UserDiscount = lazy(async () => {
   const { UserDiscount } = await import('./user-discount');
   return { default: UserDiscount };
});
export const UserInfoShort = lazy(async () => {
   const { UserInfoShort } = await import('./user-info-short');
   return { default: UserInfoShort };
});
export const UserPhone = lazy(async () => {
   const { UserPhone } = await import('./user-phone');
   return { default: UserPhone };
});
export const UserRansom = lazy(async () => {
   const { UserRansom } = await import('./user-ransom');
   return { default: UserRansom };
});
