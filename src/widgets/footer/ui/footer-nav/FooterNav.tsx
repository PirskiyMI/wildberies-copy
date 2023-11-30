import { useResize } from '../../../../shared/lib';
import { Spoiler } from '../../../../shared/ui';
import styles from './FooterNav.module.scss';
import { FC } from 'react';

type TLink = {
   title: string;
   path: string;
};
type Props = {
   label: string;
   links: TLink[];
};

export const FooterNav: FC<Props> = ({ label, links }) => {
   const { width } = useResize();

   if (width >= 1024) {
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
   }

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
};
