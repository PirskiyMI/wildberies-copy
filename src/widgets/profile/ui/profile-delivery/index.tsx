import { FC } from 'react';

import { Icon, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { ProfileItem } from '../profile-item';

type Props = {
   className?: string;
};

export const ProfileDelivery: FC<Props> = ({ className }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const classes = className ? `${className} ${styles.delivery}` : styles.delivery;

   if (windowWidth >= 1024) {
      return (
         <ProfileItem
            path="/profile/delivery"
            title={
               <div className={styles.delivery__body}>
                  <div className={styles.delivery__image}>
                     <Icon className={styles.delivery__icon} icon="delivery" />
                  </div>
                  <h2 className={styles.delivery__title}>Доставки</h2>
               </div>
            }
            content={
               <div className={styles.delivery__content}>
                  <span className={styles.delivery__label}>Ближайшая</span>
                  <span> не ожидается</span>
               </div>
            }
            className={classes}
         />
      );
   }

   return (
      <ProfileItem
         path="/profile/delivery"
         title={<h2 className={styles.delivery__title}>Доставки</h2>}
         label={
            <div className={styles.delivery__content}>
               <span className={styles.delivery__label}>Ближайшая</span>
               <span> не ожидается</span>
            </div>
         }
         content={
            <div className={styles.delivery__image}>
               <Icon className={styles.delivery__icon} icon="delivery" />
            </div>
         }
         className={classes}
      />
   );
};
