import { FC } from 'react';
import { Link } from 'react-router-dom';

import { UserInfo } from 'src/entities/user';
import { Icon, TIcon } from 'src/shared';

import styles from './styles.module.scss';

type TData = {
   name: string;
   path: string;
   icon: TIcon;
};

const data: TData[] = [
   { name: 'Покупки', path: '/profile/purchases', icon: 'cart-stroke' },
   { name: 'Избранное', path: '/profile/favorites', icon: 'like' },
   { name: 'Доставки', path: '/profile/delivery', icon: 'delivery' },
];

export const ProfileDropdown: FC = () => {
   return (
      <div className={styles.dropdown}>
         <Link to="/profile/user" className={styles.dropdown__info}>
            <UserInfo mobile withPhone />
         </Link>
         <ul className={styles.dropdown__list}>
            {data.map((el) => (
               <li key={el.path} className={styles.dropdown__item}>
                  <Link to={el.path} className={styles.dropdown__link}>
                     <div className={styles.dropdown__icon}>
                        <Icon icon={el.icon} />
                     </div>
                     <span className={styles.dropdown__text}>{el.name}</span>
                  </Link>
               </li>
            ))}
         </ul>
         <button className={styles.dropdown__button}>Выйти</button>
      </div>
   );
};
