import { FC } from 'react';

import styles from './styles.module.scss';
import { UserDiscount, UserRansom } from 'src/entities/user';
import { ProfileItem } from '../profile-item';
import { useAppSelector } from 'src/shared';

type Props = {
   className?: string;
};

export const ProfileDiscount: FC<Props> = ({ className }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const classes = className ? `${className} ${styles.discount}` : styles.discount;

   if (windowWidth >= 1024) {
      return (
         <ProfileItem
            path="/profile/user"
            title={
               <div className={styles.discount__top}>
                  <UserDiscount className={styles.discount__body} />
                  <h2>WB скидка</h2>
               </div>
            }
            content={
               <div className={styles.discount__bottom}>
                  <span className={styles.discount__label}>Процент и сумма выкуда за 2 года</span>
                  <p className={styles.discount__indicators}>
                     <UserRansom type="percent" /> | <UserRansom type="amount" />
                  </p>
               </div>
            }
            className={classes}
         />
      );
   }

   return (
      <ProfileItem
         path="/profile/user"
         title={<h2>WB скидка</h2>}
         content={<UserDiscount />}
         className={classes}
      />
   );
};
