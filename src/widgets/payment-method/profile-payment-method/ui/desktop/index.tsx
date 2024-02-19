import { userPaymentInfoSelector } from 'src/entities/user';
import { useAppSelector } from 'src/shared';

import { ProfilePaymentMethod } from './ui';

export const ProfilePaymentMethodContainer = () => {
   const payments = useAppSelector(userPaymentInfoSelector);

   return <ProfilePaymentMethod payments={payments} />;
};
