import { FC } from 'react';

import { DesktopProfileUserDetails } from 'src/widgets/user/profile-user-details';
import { DesktopUserMetrics } from 'src/widgets/user/user-metrics';
import { DesktopProfilePaymentMethod } from 'src/widgets/payment-method/profile-payment-method';

import styles from './styles.module.scss';

export const ProfilePage: FC = () => {
   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <DesktopProfileUserDetails />
            <DesktopUserMetrics />
            <DesktopProfilePaymentMethod />
         </div>
      </div>
   );
};
