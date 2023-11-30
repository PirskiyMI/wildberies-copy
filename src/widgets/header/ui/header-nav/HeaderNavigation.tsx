import { FC } from 'react';
import styles from './HeaderNavigation.module.scss';

import { LinkToCart, LinkToProfile } from '../../../../shared/ui/links';

export const HeaderNavigation: FC = () => {
   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            <LinkToProfile />
            <LinkToCart />
         </ul>
      </nav>
   );
};
