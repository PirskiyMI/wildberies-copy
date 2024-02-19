import { useAppSelector } from 'src/shared';
import { userPaymentInfoSelector } from 'src/entities/user';

import { ProfilePaymentMethod } from './ui';

export const ProfilePaymentMethodContainer = () => {
   const payments = useAppSelector(userPaymentInfoSelector);

   return <ProfilePaymentMethod payments={payments} />;
};
