import { FC } from 'react';
import styles from './ProductPreloader.module.scss';

export const ProductPreloader: FC = () => {
   return (
      <div className={styles.preloader}>
         <div className={styles.preloader__animation}></div>
      </div>
   );
};
