import { FC } from 'react';

import styles from './styles.module.scss';
import { UserProfile } from 'src/widgets/user/user-profile';
import { UserMetrics } from 'src/widgets/user/user-metrics';
import { UserPaymentMethods } from 'src/widgets/user/user-payment-methods';

const ProfileInfo: FC = () => {
   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <UserProfile />
            <UserMetrics />
            <UserPaymentMethods />
         </div>
      </div>
   );
};

export default ProfileInfo;
