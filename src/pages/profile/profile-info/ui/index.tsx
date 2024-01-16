import { FC } from 'react';

import { UserMetrics, UserPaymentMethodsWidget, UserProfile } from 'src/widgets/user-details';

import styles from './styles.module.scss';

const ProfileInfo: FC = () => {
   return (
      <div className={styles.info}>
         <div className={`${styles.info__container} container`}>
            <UserProfile />
            <UserMetrics />
            <UserPaymentMethodsWidget />
         </div>
      </div>
   );
};

export default ProfileInfo;
