import { FC } from 'react';

import { UserInfo } from 'src/entities/user';
import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { ProfileUser } from '../profile-user';
import { ProfileDelivery } from '../profile-delivery';
import { ProfileDiscount } from '../profile-discount';
import { ProfilePaymentMethods } from '../profile-payment-methods';
import { ProfileBalance } from '../profile-balance';
import { ProfileChecks } from '../profile-checks';
import { ProfileBrands } from '../profile-brands';
import { ProfilePurchases } from '../profile-purchases';
import { ProfileFavorites } from '../profile-favorites';

export const ProfileGrid: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
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
   }

   const classesItemBig = `${styles.profile__item} ${styles.profile__item_big}`;
   const classesItemAdaptive =
      windowWidth >= 576
         ? styles.profile__item
         : `${styles.profile__item} ${styles.profile__item_big}`;

   return (
      <section className={styles.profile}>
         <div className={classesItemBig}>
            <UserInfo mobile withPhone />
         </div>
         <div className={classesItemBig}>
            <ProfileDelivery />
         </div>

         <div className={styles.profile__item}>
            <ProfilePaymentMethods />
         </div>
         <div className={styles.profile__item}>
            <ProfileBalance />
         </div>

         <div className={classesItemBig}>
            <ProfileFavorites />
         </div>

         <div className={classesItemAdaptive}>
            <ProfileDiscount />
         </div>
         <div className={classesItemAdaptive}>
            <ProfileBrands />
         </div>
         <div className={classesItemAdaptive}>
            <ProfileChecks />
         </div>
         <div className={classesItemAdaptive}>
            <ProfilePurchases />
         </div>
      </section>
   );
};
