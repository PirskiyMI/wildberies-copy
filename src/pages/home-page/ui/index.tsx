import { FC, useEffect, useState } from 'react';

import { IProduct, ServerError, useAppDispatch, useAppSelector } from 'src/shared';
import { fetchAllProducts } from 'src/entities/product/api';
import { ProductSkeletonList } from 'src/widgets/product/product-skeleton-list';
import { ProductList } from 'src/widgets/product/product-list';

import styles from './styles.module.scss';
import { ProductListIsEmpty } from 'src/widgets/product/product-list-is-empty';

const HomePage: FC = () => {
   const { value } = useAppSelector((state) => state.searchReducer);
   const { products, isLoading, error } = useAppSelector((state) => state.productsListReducer);
   const [productsList, setProductsList] = useState<IProduct[]>([]);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!products.length) dispatch(fetchAllProducts());
   }, [value]);
   useEffect(() => {
      if (value.trim().length === 0) {
         setProductsList(products);
      } else {
         const sortedProducts = products.filter((el) =>
            el.title.toLowerCase().includes(value.toLowerCase()),
         );
         setProductsList(sortedProducts);
      }
   }, [value, products]);

   if (isLoading) {
      return (
         <div className="container">
            <ProductSkeletonList />
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
         {productsList.length ? (
            <ProductList products={productsList} />
         ) : (
            <ProductListIsEmpty searchValue={value} />
         )}
      </div>
   );
};

export default HomePage;
