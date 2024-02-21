import { memo } from 'react';

import { useAppSelector } from 'src/shared';
import { userPaymentInfoSelector } from 'src/entities/user';
import { userIsAuthSelector } from 'src/entities/user/model/selectors/user-is-auth-selector';

import { BasketPaymentMethod } from './ui';
import { BasketPaymentMethodNotAuth } from './ui-not-auth';

export const BasketPaymentMethodContainer = memo(() => {
   const paymentInfo = useAppSelector(userPaymentInfoSelector);
   const isAuth = useAppSelector(userIsAuthSelector);
   const mainCard = paymentInfo.find((el) => el.isMain)?.cardNumber;

   if (!isAuth) return <BasketPaymentMethodNotAuth />;

   return <BasketPaymentMethod paymentInfo={paymentInfo} mainCard={mainCard} />;
});
