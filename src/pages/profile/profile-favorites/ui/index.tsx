import { FC, useState } from 'react';

import { useAppSelector, IProductWithRating } from 'src/shared';
import { ProductFavoriteList } from 'src/widgets/product/product-favorite-list';
import { ProductSelect } from 'src/widgets/product/product-select';
import { ProductDetails } from 'src/widgets/product/product-details';

import styles from './styles.module.scss';

const ProfileFavorites: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const [products, setProducts] = useState<IProductWithRating[]>([]);

   if (!favorites.products.length) {
      return <div className={`${styles.favorites__container} container`}>Пшел нах!</div>;
   }

   return (
      <div className={`${styles.favorites__container} container`}>
         <ProductSelect
            products={favorites.products}
            setProducts={setProducts}
            className={styles.favorites__select}
         />
         <ProductFavoriteList products={products} />
         {isModalOpen && <ProductDetails />}
      </div>
   );
};

export default ProfileFavorites;
