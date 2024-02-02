import { FC } from 'react';

import styles from './styles.module.scss';

import { HeaderLink, mainPath, useAppSelector } from 'src/shared';
import { mobileMenuLinkList } from '../../constants';

export const HeaderMobileMenu: FC = () => {
   const { totalCount } = useAppSelector((state) => state.basketReducer);

   return (
      <nav>
         <ul className={styles.menu}>
            <li className={styles.menu__item}>
               <HeaderLink icon="home" path={mainPath} />
            </li>
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
