import { FC, memo } from 'react';

import styles from './styles.module.scss';

import { Spoiler } from 'src/shared';
import { IFooterNav } from '../../../types';

export const FooterNav: FC<IFooterNav> = memo(({ label, links }) => {
   return (
      <Spoiler
         Title={<div className={styles.nav__label}>{label}</div>}
         Content={
            <nav className={styles.nav}>
               <ul className={styles.nav__list}>
                  {links.map((el) => (
                     <li key={el.title} className={styles.nav__item}>
                        <a href={el.path}>{el.title}</a>
                     </li>
                  ))}
               </ul>
            </nav>
         }
      />
   );
});
