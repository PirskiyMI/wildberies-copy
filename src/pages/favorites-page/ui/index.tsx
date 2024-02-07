import { FC, useState } from 'react';

import { useAppSelector, IProduct } from 'src/shared';
import { ProductSelect } from 'src/widgets/product/product-select';
import { ProductList } from 'src/widgets/product/product-list';

import styles from './styles.module.scss';
import { FavoritesIsEmpty } from './favorites-is-empty';

export const FavoritesPage: FC = () => {
   const { favorites } = useAppSelector((state) => state.productFavoritesReducer);
   const [products, setProducts] = useState<IProduct[]>([]);

   return (
      <div className={`${styles.favorites__container} container`}>
         {favorites.length ? (
            <>
               <ProductSelect
                  products={favorites}
                  setProducts={setProducts}
                  className={styles.favorites__select}
               />
               <ProductList products={products} isFavoriteList />
            </>
         ) : (
            <FavoritesIsEmpty />
         )}
      </div>
   );
};
