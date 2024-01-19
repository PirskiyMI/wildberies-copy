import { FC } from 'react';

import styles from './styles.module.scss';
import { UserDiscount, UserRansom } from 'src/entities/user';
import { ProfileItem } from '../profile-item';

type Props = {
   className?: string;
};

export const ProfileDiscount: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.discount}` : styles.discount;

   return (
      <ProfileItem
         path="/profile/user"
         title={
            <div className={styles.discount__top}>
               <UserDiscount className={styles.discount__body} />
               <h2 className={styles.discount__title}>WB скидка</h2>
            </div>
         }
         content={
            <div className={styles.discount__bottom}>
               <span className={styles.discount__label}>Процент и сумма выкуда за 2 года</span>
               <p className={styles.discount__indicators}>
                  <UserRansom type="percent" className={styles.discount__number} /> |{' '}
                  <UserRansom type="amount" className={styles.discount__number} />
               </p>
            </div>
         }
         className={classes}
      />
   );
};
