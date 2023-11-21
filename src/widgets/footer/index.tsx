import styles from './index.module.scss';
import { FC } from 'react';
import FooterList from './ui/FooterList';
import {
   socialLinks,
   companyLinks,
   projectLinks,
   customerLinks,
   partnersLinks,
} from './config/linksData';

const Footer: FC = () => {
   return (
      <footer className={styles.footer}>
         <div className={`${styles.footer__container} container`}>
            <div className={styles.footer__column}>
               <FooterList label="Покупателям" links={customerLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterList label="Партнерам" links={partnersLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterList label="Наши проекты" links={projectLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterList label="Компания" links={companyLinks} />
            </div>
            <div className={styles.footer__column}>
               <FooterList label="Мы в соцсетях" links={socialLinks} />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
