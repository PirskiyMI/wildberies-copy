import { FC } from 'react';

import { UserDetails } from 'src/widgets/user/user-details';
import { UserMetrics } from 'src/widgets/user/user-metrics';
import { UserPaymentMethods } from 'src/widgets/user/user-payment-methods';

import styles from './styles.module.scss';

const ProfilePage: FC = () => {
   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <UserDetails />
            <UserMetrics />
            <UserPaymentMethods />
         </div>
      </div>
   );
};

export default ProfilePage;
