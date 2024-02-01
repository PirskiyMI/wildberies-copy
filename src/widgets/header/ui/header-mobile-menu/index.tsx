import { FC } from 'react';

import styles from './styles.module.scss';

import { HeaderLink, mainPath, useAppSelector } from 'src/shared';
import { mobileMenuLinkList } from '../../constants';

export const HeaderMobileMenu: FC = () => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <nav>
         <ul className={styles.menu}>
            <li className={styles.menu__item}>
               <HeaderLink icon="home" path={mainPath} />
            </li>
            {mobileMenuLinkList.map(({ icon, to, isCount }) => (
               <li className={styles.menu__item}>
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
