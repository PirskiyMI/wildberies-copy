import { FC, useEffect } from 'react';

import { Preloader, ServerError, useAppDispatch, useAppSelector } from 'src/shared';
import { ProductList } from 'src/widgets/product/product-list';

import styles from './styles.module.scss';
import { productsListSelector } from 'src/entities/product/model/selectors';
import { fetchAllProducts } from 'src/entities/product/api';

export const HomePage: FC = () => {
   const { products, isLoading, error } = useAppSelector(productsListSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!products.length) dispatch(fetchAllProducts());
   }, [dispatch, products.length]);

   if (isLoading) {
      return (
         <div className="container">
            <Preloader />
         </div>
      );
   } else if (error) {
      return (
         <div className="container">
            <ServerError />
         </div>
      );
   }
   return (
      <div className={`${styles.home__container} container`}>
         <ProductList products={products} isFavoriteList={false} />
      </div>
   );
};
