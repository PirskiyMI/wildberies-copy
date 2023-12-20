import { FC } from 'react';
import styles from './HeaderNavigation.module.scss';

import { HeaderLink } from '../../../../shared/ui/links';
import { useAppSelector } from '../../../../shared/lib';

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
