import { FC, useEffect, useState } from 'react';
import { IProductWithRating, useAppDispatch, useAppSelector } from '../../../shared/lib';
import { fetchAllProducts } from '../../../entities/product/api/productsActionCreator';
import { HomeListPreloader, HomeListWithContainer } from '../../../widgets/home';

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
            <HomeListPreloader />
         </div>
      );
   } else if (error) {
      return <div>{error}</div>;
   }

   return (
      <>
         <HomeListWithContainer productList={productsList} />
      </>
   );
};

export default Home;
