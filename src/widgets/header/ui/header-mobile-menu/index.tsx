import { FC } from 'react';

import styles from './styles.module.scss';

import { HeaderLink, useAppSelector } from 'src/shared';
import { mobileMenuLinkList } from '../../constants';
import { basketItemsTotalSelector } from 'src/entities/basket/basket-item';

export const HeaderMobileMenu: FC = () => {
   const count = useAppSelector(basketItemsTotalSelector);

   return (
      <nav>
         <ul className={styles.menu}>
            {mobileMenuLinkList.map(({ icon, to, isCount }) => (
               <li key={icon} className={styles.menu__item}>
                  {isCount ? (
                     <HeaderLink icon={icon} path={to} count={count} />
                  ) : (
                     <HeaderLink icon={icon} path={to} />
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};
