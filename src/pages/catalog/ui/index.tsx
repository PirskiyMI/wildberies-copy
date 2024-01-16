import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Preloader, useAppDispatch, useAppSelector } from 'src/shared';
import { CatalogList, fetchCategoryProducts } from 'src/widgets/catalog';

import styles from './styles.module.scss';

const CatalogPage: FC = () => {
   const { category } = useParams();
   const { list, isLoading, error } = useAppSelector((state) => state.catalogListReducer);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (category) dispatch(fetchCategoryProducts(category));
   }, [category, dispatch]);

   if (error) {
      return <div>{error}</div>;
   } else if (isLoading) {
      return <Preloader />;
   }

   return (
      <div className={`${styles.catalog__container} container`}>
         <CatalogList productList={list} />
      </div>
   );
};

export default CatalogPage;
