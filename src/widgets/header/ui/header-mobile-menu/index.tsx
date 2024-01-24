import { FC } from 'react';

import styles from './styles.module.scss';

import { HeaderLink, useAppSelector } from 'src/shared';

export const HeaderMobileMenu: FC = () => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <nav>
         <ul className={styles.menu}>
            <li className={styles.menu__item}>
               <HeaderLink icon="home" path="/" />
            </li>
            <li className={styles.menu__item}>
               <HeaderLink icon="burger" path="/navigation" />
            </li>
            <li className={styles.menu__item}>
               <HeaderLink icon="cart" path="/cart" count={count} />
            </li>
            <li className={styles.menu__item}>
               <HeaderLink icon="like" path="/profile/favorite" />
            </li>
            <li className={styles.menu__item}>
               <HeaderLink icon="user" path="/profile" />
            </li>
         </ul>
      </nav>
   );
};
