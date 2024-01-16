import { FC } from 'react';

import { HeaderLink, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

export const HeaderNavigation: FC = () => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

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
