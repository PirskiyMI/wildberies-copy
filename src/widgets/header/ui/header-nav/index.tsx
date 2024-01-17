import { FC, ReactNode } from 'react';

import { HeaderLink, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   dropDown?: ReactNode;
};

export const HeaderNavigation: FC<Props> = ({ dropDown }) => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   if (dropDown) {
      return (
         <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
               <li>
                  <HeaderLink icon="delivery" path="/profile/delivery" label="Доставки" />
               </li>
               <li>
                  <HeaderLink icon="like" path="/profile/favorites" label="Избранное" />
               </li>
               <li className={styles.navigation__item}>
                  <HeaderLink icon="user" path="/profile" label="Профиль" />
                  <div className={styles.navigation__dropdown}>{dropDown}</div>
               </li>
               <li>
                  <HeaderLink
                     icon="cart"
                     path="/cart"
                     label="Корзина"
                     count={count > 0 ? count : null}
                  />
               </li>
            </ul>
         </nav>
      );
   }

   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <HeaderLink icon="delivery" path="/profile/delivery" label="Доставки" />
            <HeaderLink icon="like" path="/profile/favorites" label="Избранное" />
            <HeaderLink icon="user" path="/profile" label="Профиль" />
            <HeaderLink icon="cart" path="/cart" label="Корзина" count={count > 0 ? count : null} />
         </ul>
      </nav>
   );
};
