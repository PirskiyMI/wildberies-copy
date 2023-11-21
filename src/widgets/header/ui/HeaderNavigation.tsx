import { FC } from 'react';
import styles from './Header.module.scss';

import { LinkToCart, LinkToProfile } from '../../../features/links';

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
