import { FC } from 'react';
import styles from './HeaderMobileMenu.module.scss';

import { Burger } from '../../../../shared/ui';
import { LinkToCart, LinkToFavorite, LinkToHome, LinkToProfile } from '../../../../shared/ui/links';

export const HeaderMobileMenu: FC = () => {
   return (
      <div className={styles.menu}>
         <span className={styles.menu__item}>
            <LinkToHome />
         </span>
         <span className={styles.menu__item}>
            <Burger className={styles.menu__icon} />
         </span>
         <span className={styles.menu__item}>
            <LinkToCart />
         </span>
         <span className={styles.menu__item}>
            <LinkToFavorite />
         </span>
         <span className={styles.menu__item}>
            <LinkToProfile />
         </span>
      </div>
   );
};
