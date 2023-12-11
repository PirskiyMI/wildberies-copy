import { FC } from 'react';
import styles from './HeaderMobileMenu.module.scss';

import { HeaderLink } from '../../../../shared/ui/links';
import { useAppSelector } from '../../../../shared/lib';

export const HeaderMobileMenu: FC = () => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <div className={styles.menu}>
         <span className={styles.menu__item}>
            <HeaderLink icon="home" path="/" />
         </span>
         <span className={styles.menu__item}>
            <HeaderLink icon="burger" path="/navigation" />
         </span>
         <span className={styles.menu__item}>
            <HeaderLink icon="cart" path="/cart" count={count} />
         </span>
         <span className={styles.menu__item}>
            <HeaderLink icon="like" path="/profile/favorite" />
         </span>
         <span className={styles.menu__item}>
            <HeaderLink icon="user" path="/profile" />
         </span>
      </div>
   );
};
