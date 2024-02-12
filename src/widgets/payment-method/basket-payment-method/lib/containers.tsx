import { useAppSelector } from 'src/shared';
import { userPaymentInfoSelector } from 'src/entities/user';

import { BasketPaymentMethod } from '../ui';

export const BasketPaymentMethodContainer = () => {
   const paymentInfo = useAppSelector(userPaymentInfoSelector);
   const mainCard = paymentInfo.find((el) => el.isMain)?.cardNumber;

   return <BasketPaymentMethod paymentInfo={paymentInfo} mainCard={mainCard} />;
};
