import { FC } from 'react';

import { UserInfo } from 'src/entities/user';
import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { UserProfileInfo } from '../user-info';
import { UserProfileDelivery } from '../user-deliveries';
import { UserProfileDiscount } from '../user-discount';
import { UserProfilePaymentMethods } from '../user-payment-methods';
import { UserProfileBalance } from '../user-balance';
import { UserProfileChecks } from '../user-checks';
import { UserProfileFavoriteBrands } from '../user-favorite-brands';
import { UserProfilePurchases } from '../user-purchases';
import { UserProfileFavorites } from '../user-favorites';

export const UserUserProfileGrid: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return (
         <section className={styles.profile}>
            <div className={styles.profile__item}>
               <UserProfileInfo />
            </div>
            <div className={styles.profile__item}>
               <UserProfileDelivery />
            </div>
            <div className={styles.profile__item}>
               <UserProfileDiscount />
            </div>

            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <UserProfilePaymentMethods />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <UserProfileBalance />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <UserProfileChecks />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <UserProfileFavoriteBrands />
            </div>

            <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
               <UserProfilePurchases />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
               <UserProfileFavorites />
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
            <UserProfileDelivery />
         </div>

         <div className={styles.profile__item}>
            <UserProfilePaymentMethods />
         </div>
         <div className={styles.profile__item}>
            <UserProfileBalance />
         </div>

         <div className={classesItemBig}>
            <UserProfileFavorites />
         </div>

         <div className={classesItemAdaptive}>
            <UserProfileDiscount />
         </div>
         <div className={classesItemAdaptive}>
            <UserProfileFavoriteBrands />
         </div>
         <div className={classesItemAdaptive}>
            <UserProfileChecks />
         </div>
         <div className={classesItemAdaptive}>
            <UserProfilePurchases />
         </div>
      </section>
   );
};
