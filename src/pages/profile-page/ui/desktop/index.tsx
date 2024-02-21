import { FC } from 'react';

import { DesktopProfileUserDetails } from 'src/widgets/user/profile-user-details';
import { DesktopProfilePaymentMethod } from 'src/widgets/payment-method/profile-payment-method';

import styles from './styles.module.scss';
import { userIsAuthSelector } from 'src/entities/user/model/selectors/user-is-auth-selector';
import { useAppSelector } from 'src/shared';
import { Navigate } from 'react-router-dom';

export const ProfilePage: FC = () => {
   const isAuth = useAppSelector(userIsAuthSelector);

   if (!isAuth) return <Navigate to={'/auth'} />;

   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <DesktopProfileUserDetails />
            <DesktopProfilePaymentMethod />
         </div>
      </div>
   );
};
