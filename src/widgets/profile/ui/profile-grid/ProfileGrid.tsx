import { FC } from 'react';
import styles from './ProfileGrid.module.scss';
import { ProfileItem, ProfileItemLabel } from '../../../../entities/profile';
import { User, UserDelivery, UserDiscounts, UserPhone } from '../../../../entities/user';
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
               <ProfileItem top={<User />} bottom={<UserPhone />} path="/" />
            </div>
            <div className={styles.profile__item}>
               <ProfileItem
                  top={<UserDelivery />}
                  bottom={<ProfileItemLabel label="Ближайшая" text=" не ожидается" />}
                  path="/"
                  className={styles.profile__item_gradient}
               />
            </div>
            <div className={styles.profile__item}>
               <ProfileItem
                  top={<UserDiscounts />}
                  bottom={
                     <ProfileItemLabel
                        className={styles.profile__label}
                        label="Процент и сумма выкупа за 2 года"
                        text="0% | 0 Р"
                     />
                  }
                  path="/"
               />
            </div>

            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem
                  top={<h2>Способы оплаты</h2>}
                  bottom={<ProfileItemLabel label="Добавить карту" />}
                  path="/"
                  className={styles.profile__item_colored}
               />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem
                  top={<h2>Баланс</h2>}
                  bottom={<ProfileItemLabel label="0 ₽" />}
                  path="/"
               />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem
                  top={<h2>Чеки</h2>}
                  bottom={<ProfileItemLabel label="Смотреть" />}
                  path="/"
               />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
               <ProfileItem
                  top={<h2>Любимые бренды</h2>}
                  bottom={<ProfileItemLabel label="0 брендов" />}
                  path="/"
               />
            </div>

            <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
               <ProfileItem
                  top={<h2>Покупки</h2>}
                  bottom={<ProfileItemLabel label="В покупках пока пусто" />}
                  path="/"
               />
            </div>
            <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
               <ProfileItem
                  top={<h2>Избранное</h2>}
                  bottom={<ProfileItemLabel label="В избранном пока пусто" />}
                  path="/"
               />
            </div>
         </section>
      );
   }

   return (
      <section className={styles.profile}>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileItem top={<User />} path="/" />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileItem
               top={<h2>Доставка</h2>}
               bottom={<ProfileItemLabel label="Ближайшая" text=" не ожидается" />}
               path="/"
               className={`${styles.profile__item_gradient} ${styles.profile__item_column}`}
            />
         </div>

         <div className={styles.profile__item}>
            <ProfileItem
               top={<h2>Способы оплаты</h2>}
               bottom={<ProfileItemLabel label="Добавить карту" />}
               path="/"
               className={`${styles.profile__item_colored} ${styles.profile__item_column}`}
            />
         </div>
         <div className={styles.profile__item}>
            <ProfileItem
               top={<h2>Баланс</h2>}
               bottom={<ProfileItemLabel label="0 ₽" />}
               path="/"
               className={styles.profile__item_column}
            />
         </div>

         <div className={itemClasses}>
            <ProfileItem
               top={<h2>WB скидка</h2>}
               bottom={<ProfileItemLabel className={styles.profile__label} label="28%" />}
               path="/"
            />
         </div>
         <div className={itemClasses}>
            <ProfileItem top={<h2>Чеки</h2>} path="/" />
         </div>
         <div className={itemClasses}>
            <ProfileItem
               top={<h2>Любимые бренды</h2>}
               bottom={<ProfileItemLabel label="0 брендов" />}
               path="/"
            />
         </div>
         <div className={itemClasses}>
            <ProfileItem
               top={<h2>Покупки</h2>}
               bottom={<ProfileItemLabel label="0 товаров" />}
               path="/"
            />
         </div>

         <div className={`${styles.profile__item} ${styles.profile__item_big}`}>
            <ProfileItem
               top={<h2>Избранное</h2>}
               bottom={<ProfileItemLabel label="В избранном пока пусто" />}
               path="/"
               className={styles.profile__item_column}
            />
         </div>
      </section>
   );
};
