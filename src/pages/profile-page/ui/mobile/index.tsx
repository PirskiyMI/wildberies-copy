import { FC } from 'react';

import { MobileProfileUserDetails } from 'src/widgets/user/user-details';
import { MobileUserMetrics } from 'src/widgets/user/user-metrics';
import { MobileProfilePaymentMethod } from 'src/widgets/payment-method/profile-payment-method';

import styles from './styles.module.scss';

export const ProfilePage: FC = () => {
   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <MobileProfileUserDetails />
            <MobileUserMetrics />
            <MobileProfilePaymentMethod />
         </div>
      </div>
   );
};
