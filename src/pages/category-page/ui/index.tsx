import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Preloader, useAppDispatch, useAppSelector } from 'src/shared';
import { fetchProductsByCategory } from 'src/entities/product/api';
import { ProductList } from 'src/widgets/product/product-list';
import { ProductDetails } from 'src/widgets/product/product-details';

import styles from './styles.module.scss';

const CategoryPage: FC = () => {
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const { products, isLoading, error } = useAppSelector(
      (state) => state.productsListOfCategoryReducer,
   );
   const { category } = useParams();
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchProductsByCategory(category!));
   }, [category, dispatch]);

   if (error) {
      return <div>{error}</div>;
   } else if (isLoading) {
      return <Preloader />;
   }

   return (
      <div className={`${styles.catalog__container} container`}>
         <ProductList products={products} />
         {isModalOpen && <ProductDetails />}
      </div>
   );
};

export default CategoryPage;