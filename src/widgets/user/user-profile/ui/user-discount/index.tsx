import { FC } from 'react';

import { ProfileTile, useAppSelector } from 'src/shared';
import { UserDiscount, UserRansom } from 'src/entities/user';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const UserProfileDiscount: FC<Props> = ({ className }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const classes = className ? `${className} ${styles.discount}` : styles.discount;

   if (windowWidth >= 1024) {
      return (
         <ProfileTile
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
      <ProfileTile
         path="/profile/user"
         title={<h2>WB скидка</h2>}
         content={<UserDiscount />}
         className={classes}
      />
   );
};
