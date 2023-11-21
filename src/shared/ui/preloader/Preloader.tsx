import { FC } from 'react';
import styles from './Preloader.module.scss';

export const Preloader: FC = () => {
   return (
      <div className={styles.preloader}>
         <div className={styles.preloader__wrapper}>
            <div className={styles.preloader__circle}></div>
         </div>
      </div>
   );
};
