import { FC } from 'react';
import styles from './ProfileInfo.module.scss';
import { UserMetrics, UserPaymentMethodsWidget, UserProfile } from '../../../../widgets/user-details';

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
