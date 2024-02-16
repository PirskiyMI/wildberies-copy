import { FC } from 'react';

import styles from './styles.module.scss';

import { FooterNav } from './footer-nav';
import { IFooter } from '../types';

export const Footer: FC<IFooter> = ({ lists, isDesktop }) => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            {lists.map(({ label, links }) => (
               <div key={label} className={styles.footer__column}>
                  <FooterNav label={label} links={links} isDesktop={isDesktop} />
               </div>
            ))}
         </div>
      </footer>
   );
};
