import { FC } from 'react';
import styles from './ProfileGrid.module.scss';
import { ProfileItem } from '../../../../entities/profile';
import {
   UserInfo,
   UserDelivery,
   UserDiscounts,
   UserPaymentMethods,
   UserBalance,
   UserChecks,
   UserFavoriteBrands,
   UserPurchases,
   UserFavorite,
} from '../../../../entities/user';
import { useAppSelector } from '../../../../shared/lib';

export const ProfileGrid: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const itemClasses =
      windowWidth >= 576
         ? styles.profile__item
         : `${styles.profile__item} ${styles.profile__item_big}`;

   if (windowWidth >= 1024) {
      return (
         <section className={styles.profile}>
            <div className={styles.profile__item}>
               <ProfileItem content={<UserInfo />} path="/" />
            </div>
            <div className={styles.profile__item}>
               <ProfileItem
                  content={<UserDelivery />}
                  path="/"
                  className={styles.profile__item_gradient}
               />
            </div>
            <div className={styles.profile__item}>
               <ProfileItem content={<UserDiscounts />} path="/" />
            </div>

            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem
                  content={<UserPaymentMethods />}
                  path="/"
                  className={styles.profile__item_colored}
               />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem content={<UserBalance />} path="/" />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem content={<UserChecks />} path="/" />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem content={<UserFavoriteBrands />} path="/" />
            </div>

            <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
               <ProfileItem content={<UserPurchases />} path="/" />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
               <ProfileItem content={<UserFavorite />} path="/" />
            </div>
         </section>
      );
   }

   return (
      <section className={styles.profile}>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <UserInfo />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileItem
               content={<UserDelivery />}
               path="/"
               className={styles.profile__item_gradient}
            />
         </div>

         <div className={styles.profile__item}>
            <ProfileItem
               content={<UserPaymentMethods />}
               path="/"
               className={`${styles.profile__item_colored} ${styles.profile__item_column}`}
            />
         </div>
         <div className={styles.profile__item}>
            <ProfileItem
               content={<UserBalance />}
               path="/"
               className={styles.profile__item_column}
            />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileItem
               content={<UserFavorite />}
               path="/"
               className={styles.profile__item_column}
            />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileItem content={<UserDiscounts />} path="/" />
         </div>

         <div className={itemClasses}>
            <ProfileItem content={<UserPurchases />} path="/" />
         </div>
         <div className={itemClasses}>
            <ProfileItem content={<UserFavoriteBrands />} path="/" />
         </div>
         <div className={itemClasses}>
            <ProfileItem content={<UserChecks />} path="/" />
         </div>
         <div className={itemClasses}>
            <ProfileItem content={<h2>Travel</h2>} path="/" />
         </div>
      </section>
   );
};
