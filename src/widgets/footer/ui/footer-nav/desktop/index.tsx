import { FC, memo } from 'react';

import styles from './styles.module.scss';

import { IFooterNav } from '../../../types';

export const FooterNav: FC<IFooterNav> = memo(({ label, links }) => {
   return (
      <nav className={styles.nav}>
         <div className={styles.nav__label}>{label}</div>
         <ul className={styles.nav__list}>
            {links.map((el) => (
               <li key={el.title} className={styles.nav__item}>
                  <a href={el.path}>{el.title}</a>
               </li>
            ))}
         </ul>
      </nav>
   );
});
