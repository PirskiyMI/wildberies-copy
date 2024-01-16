import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { IProductWithRating, useAppDispatch, useAppSelector } from '../../../shared/lib';
import { HomeList, HomePreloader } from '../../../widgets/home';
import { ProductModal } from '../../../widgets/product-modal';
import { fetchAllProducts } from '../../../widgets/home';

const Home: FC = () => {
   const { value: searchValue } = useAppSelector((state) => state.searchReducer);
   const [productsList, setProductsList] = useState<IProductWithRating[]>([]);
   const { products, isLoading, error } = useAppSelector((state) => state.productListReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!products.length) {
         dispatch(fetchAllProducts());
      }
   }, [searchValue, dispatch]);
   useEffect(() => {
      if (searchValue.trim().length === 0) {
         setProductsList(products);
      } else {
         const sortedProducts = products.filter((el) =>
            el.title.toLowerCase().includes(searchValue.toLowerCase()),
         );
         setProductsList(sortedProducts);
      }
   }, [searchValue, products]);

   if (isLoading) {
      return (
         <div className="container">
            <HomePreloader />
         </div>
      );
   } else if (error) {
      return <div>{error}</div>;
   }

   return (
      <>
         {isModalOpen && <ProductModal />}
         <div className={`${styles.home__container} container`}>
            <HomeList productList={productsList} search={searchValue} />
         </div>
      </>
   );
};

export default Home;
