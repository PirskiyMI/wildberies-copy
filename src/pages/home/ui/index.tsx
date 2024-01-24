import { FC, useEffect, useState } from 'react';

import { IProductWithRating, ServerError, useAppDispatch, useAppSelector } from 'src/shared';
import { HomePreloader } from 'src/widgets/home';

import styles from './styles.module.scss';
import { ProductList } from 'src/widgets/product/ui/product-list';
import { fetchAllProducts } from 'src/entities/product/api';
import { ProductDetails } from 'src/widgets/product';

const Home: FC = () => {
   const { value } = useAppSelector((state) => state.searchReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const { products, isLoading, error } = useAppSelector((state) => state.productsListReducer);
   const [productsList, setProductsList] = useState<IProductWithRating[]>([]);
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
            <HomePreloader />
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
         <ProductList products={productsList} />
         {isModalOpen && <ProductDetails />}
      </div>
   );
};

export default Home;
