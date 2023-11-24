import { FC } from 'react';
import { ProductPreloader } from '../../../entities/product';
import styles from './HomeListPreloader.module.scss';

export const HomeListPreloader: FC = () => {
   return (
      <div className={styles.preloader}>
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
         <ProductPreloader />
      </div>
   );
};
