import { FC, useEffect, useState } from 'react';
import { IProductWithRating, useAppDispatch, useAppSelector } from '../../../shared/lib';
import { Preloader } from '../../../shared/ui';
import { fetchAllProducts } from '../../../entities/product/api/productsActionCreator';
import { HomeListEmptyWithContainer, HomeListWithContainer } from '../../../widgets/home';

const Home: FC = () => {
   const { value: searchValue } = useAppSelector((state) => state.searchReducer);
   const [productsList, setProductsList] = useState<IProductWithRating[]>([]);
   const { products, isLoading, error } = useAppSelector((state) => state.productListReducer);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchAllProducts());
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
      return <Preloader />;
   } else if (error) {
      return <div>{error}</div>;
   } else if (!productsList.length) {
      return <HomeListEmptyWithContainer search={searchValue} productList={products} />;
   }

   return (
      <>
         <HomeListWithContainer productList={productsList} />
      </>
   );
};

export default Home;
