import { FC } from 'react';

import { MobileLinkNav } from 'src/shared';

import styles from './styles.module.scss';
import { mobileMenuLinkList } from '../constants';
import { IMobileNavMenu } from '../lib/types';

export const MobileNavMenu: FC<IMobileNavMenu> = ({ count }) => {
   return (
      <nav>
         <ul className={styles.menu}>
            {mobileMenuLinkList.map(({ icon, to, isCount }) => (
               <li key={icon} className={styles.menu__item}>
                  {isCount ? (
                     <MobileLinkNav icon={icon} path={to} count={count} />
                  ) : (
                     <MobileLinkNav icon={icon} path={to} />
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
};
