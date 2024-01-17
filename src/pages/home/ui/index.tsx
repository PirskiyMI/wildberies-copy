import { FC, useEffect, useState } from 'react';

import { IProductWithRating, ServerError, useAppDispatch, useAppSelector } from 'src/shared';
import { HomeList, HomePreloader } from 'src/widgets/home';
import { fetchAllProducts } from 'src/widgets/home';

import styles from './styles.module.scss';

const Home: FC = () => {
   const { value: searchValue } = useAppSelector((state) => state.searchReducer);
   const [productsList, setProductsList] = useState<IProductWithRating[]>([]);
   const { products, isLoading, error } = useAppSelector((state) => state.productListReducer);
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
      return <div className='container'>
         <ServerError />
      </div>;
   }

   return (
      <div className={`${styles.home__container} container`}>
         <HomeList productList={productsList} search={searchValue} />
      </div>
   );
};

export default Home;
