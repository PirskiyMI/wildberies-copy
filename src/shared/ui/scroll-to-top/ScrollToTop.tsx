import { FC } from 'react';
import styles from './ScrollToTop.module.scss';
import { Icon } from '..';

export const ScrollToTop: FC = () => {
   const scrollUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <button className={styles.body} onClick={scrollUp}>
         <Icon icon="arrow" />
      </button>
   );
};
