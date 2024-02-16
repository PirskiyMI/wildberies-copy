import { FC } from 'react';

import styles from './styles.module.scss';

import { MobileFooterNav } from '../footer-nav';
import { IFooter } from '../../types';

export const Footer: FC<IFooter> = ({ lists }) => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            {lists.map(({ label, links }) => (
               <div key={label} className={styles.footer__column}>
                  <MobileFooterNav label={label} links={links} />
               </div>
            ))}
         </div>
      </footer>
   );
};
