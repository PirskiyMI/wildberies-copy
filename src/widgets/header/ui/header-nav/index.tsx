import { FC } from 'react';

import { HeaderLink } from 'src/shared';

import styles from './styles.module.scss';
import { menuLinkList } from '../../constants';
import { useGetCount } from '../../hooks';

export const HeaderNavigation: FC = () => {
   const { totalCount } = useGetCount();

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
                        count={totalCount ? totalCount : null}
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
