import { FC } from 'react';

import styles from './styles.module.scss';

import { HeaderLink } from 'src/shared';
import { mobileMenuLinkList } from '../../constants';
import { useGetCount } from '../../hooks';

export const HeaderMobileMenu: FC = () => {
   const { totalCount } = useGetCount();

   return (
      <nav>
         <ul className={styles.menu}>
            {mobileMenuLinkList.map(({ icon, to, isCount }) => (
               <li key={icon} className={styles.menu__item}>
                  {isCount ? (
                     <HeaderLink icon={icon} path={to} count={totalCount} />
                  ) : (
                     <HeaderLink icon={icon} path={to} />
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};
