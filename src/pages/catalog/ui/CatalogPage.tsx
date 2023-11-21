import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CatalogPage.module.scss';
import { fetchProducts } from '../../../entities/product/api/productsActionCreator';
import { Preloader } from '../../../shared/ui';
import { useAppDispatch, useAppSelector } from '../../../shared/lib';
import { HomeList } from '../../../widgets/home';

const CatalogPage: FC = () => {
   const { category } = useParams();
   const { products, isLoading, error } = useAppSelector((state) => state.productListReducer);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (category) dispatch(fetchProducts(category));
   }, [category, dispatch]);

   if (error) {
      return <div>{error}</div>;
   } else if (isLoading) {
      return <Preloader />;
   }

   return (
      <div className={`${styles.catalog__container} container`}>
         <HomeList productList={products} />
      </div>
   );
};

export default CatalogPage;
