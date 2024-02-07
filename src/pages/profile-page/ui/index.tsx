import { FC } from 'react';

import { ProfileUserDetails } from 'src/widgets/user/user-details';
import { UserMetrics } from 'src/widgets/user/user-metrics';
import { ProfilePaymentMethod } from 'src/widgets/payment-method/profile-payment-method';

import styles from './styles.module.scss';

export const ProfilePage: FC = () => {
   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <ProfileUserDetails />
            <UserMetrics />
            <ProfilePaymentMethod />
         </div>
      </div>
   );
};
