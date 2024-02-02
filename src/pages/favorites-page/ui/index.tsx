import { FC, useState } from 'react';

import { useAppSelector, IProduct } from 'src/shared';
import { ProductSelect } from 'src/widgets/product/product-select';
import { ProductList } from 'src/widgets/product/product-list';

import styles from './styles.module.scss';
import { ProductFavoriteListEmpty } from 'src/widgets/product/product-favorite-list-empty';

const FavoritesPage: FC = () => {
   const { favorites } = useAppSelector((state) => state.productFavoritesReducer);
   const [products, setProducts] = useState<IProduct[]>([]);

   if (!favorites.length) {
      return (
         <div className={`${styles.favorites__container} container`}>
            <ProductFavoriteListEmpty />
         </div>
      );
   }

   return (
      <div className={`${styles.favorites__container} container`}>
         <ProductSelect
            products={favorites}
            setProducts={setProducts}
            className={styles.favorites__select}
         />
         <ProductList products={products} isFavoriteList/>
      </div>
   );
};

export default FavoritesPage;
