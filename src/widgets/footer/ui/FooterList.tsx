import styles from '../index.module.scss';
import { FC } from 'react';

type TLink = {
   title: string;
   path: string;
};

type Props = {
   label: string;
   links: TLink[];
};

const FooterList: FC<Props> = ({ label, links }) => {
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
};

export default FooterList;
