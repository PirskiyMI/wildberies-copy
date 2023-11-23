import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterNav } from './FooterNav';
import {
   socialLinks,
   companyLinks,
   projectLinks,
   customerLinks,
   partnersLinks,
} from './../config/linksData';

export const Footer: FC = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <div className={styles.footer__column}>
               <FooterNav label="Покупателям" links={customerLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterNav label="Партнерам" links={partnersLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterNav label="Наши проекты" links={projectLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterNav label="Компания" links={companyLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterNav label="Мы в соцсетях" links={socialLinks} />
            </div>
         </div>
      </footer>
   );
};
