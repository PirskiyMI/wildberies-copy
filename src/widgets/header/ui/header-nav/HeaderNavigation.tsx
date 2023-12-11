import { FC } from 'react';
import styles from './HeaderNavigation.module.scss';

import { HeaderLink } from '../../../../shared/ui/links';

export const HeaderNavigation: FC = () => {
   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <HeaderLink icon="delivery" path="/profile/delivery" label="Доставки" />
            <HeaderLink icon="like" path="/profile/favorites" label="Избранное" />
            <HeaderLink icon="user" path="/profile" label="Профиль" />
            <HeaderLink icon="cart" path="/cart" label="Корзина" />
         </ul>
      </nav>
   );
};
