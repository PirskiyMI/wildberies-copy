import { FC } from 'react';
import styles from './ProfileNav.module.scss';
import { ProfileLink } from '../../../../shared/ui/links';

export const ProfileNav: FC = () => {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
               <ProfileLink icon="home" path="/profile" title="Главная" />
            </li>
            <li className={styles.nav__item}>
               <ProfileLink icon="like" path="/profile/favorites" title="Избранное" />
            </li>
            <li className={styles.nav__item}>
               <ProfileLink icon="cart-stroke" path="/profile/purchases" title="Покупки" />
            </li>
            <li className={styles.nav__item}>
               <ProfileLink icon="travel-stroke" path="/profile/travel" title="Travel" />
            </li>
            <li className={styles.nav__item}>
               <ProfileLink icon="chat-stroke" path="/profile/appeals" title="Обращения" />
            </li>
            <li className={styles.nav__item}>
               <ProfileLink icon="like-stroke" path="/profile/reviews" title="Отзывы и вопросы" />
            </li>
            <li className={styles.nav__item}>
               <ProfileLink icon="user" path="/profile/user" title="Профиль" />
            </li>
         </ul>
      </nav>
   );
};
