import { FC } from 'react';
import styles from './ProfileGrid.module.scss';
import { ProfileItem, ProfileItemLabel } from '../../../../entities/profile';
import { User } from '../../../../entities/user';
import { UserPhone } from '../../../../entities/user/ui';

export const ProfileGrid: FC = () => {
   return (
      <section className={styles.profile}>
         <div className={styles.profile__item}>
            <ProfileItem top={<User />} bottom={<UserPhone />} path="/" />
         </div>
         <div className={styles.profile__item}>
            <ProfileItem
               top={<h2>Доставка</h2>}
               bottom={<ProfileItemLabel label="Ближайшая" text=" не ожидается" />}
               path="/"
            />
         </div>
         <div className={styles.profile__item}>
            <ProfileItem
               top={<h2>WB скидка</h2>}
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
            />
         </div>
         <div className={`${styles.profile__item} ${styles.profile__item_small}`}>
            <ProfileItem top={<h2>Баланс</h2>} bottom={<ProfileItemLabel label="0 ₽" />} path="/" />
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
};
