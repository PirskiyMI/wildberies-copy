import { FC } from 'react';

import styles from './styles.module.scss';

import {
   ProfileDelivery,
   ProfileDiscount,
   ProfileUser,
   ProfilePaymentMethods,
   ProfileBalance,
   ProfileChecks,
   ProfileBrands,
   ProfilePurchases,
   ProfileFavorites,
} from 'src/entities/profile';

export const ProfileGrid: FC = () => {
   return (
      <section className={styles.profile}>
         <div className={styles.profile__item}>
            <ProfileUser />
         </div>
         <div className={styles.profile__item}>
            <ProfileDelivery />
         </div>
         <div className={styles.profile__item}>
            <ProfileDiscount />
         </div>

         <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
            <ProfilePaymentMethods />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
            <ProfileBalance />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
            <ProfileChecks />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
            <ProfileBrands />
         </div>

         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfilePurchases />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileFavorites />
         </div>
      </section>
   );
};
