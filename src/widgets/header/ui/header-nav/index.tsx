import { FC } from 'react';

import { HeaderLink, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { menuLinkList } from '../../constants';

export const HeaderNavigation: FC = () => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <nav className={styles.navigation}>
         <ul className={styles.navigation__list}>
            {menuLinkList.map(({ icon, to, isCount, label }) => (
               <li key={icon}>
                  {isCount ? (
                     <HeaderLink
                        icon={icon}
                        path={to}
                        label={label}
                        count={count > 0 ? count : null}
                     />
                  ) : (
                     <HeaderLink icon={icon} path={to} label={label} />
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};
