import { FC, useState } from 'react';

import { useAppSelector, IProductWithRating } from 'src/shared';
import { ProfileReorder } from 'src/widgets/profile';
import { UserFavoritesList, UserFavoritesSelect } from 'src/widgets/user/user-favorites';
import { ProductModal } from 'src/widgets/product-modal';

import styles from './styles.module.scss';

const ProfileFavorites: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const { isModalOpen } = useAppSelector((state) => state.modalReducer);
   const [products, setProducts] = useState<IProductWithRating[]>([]);

   if (!favorites.products.length) {
      return (
         <div className={`${styles.favorites__container} container`}>
            <ProfileReorder
               title="В избранном пока пусто"
               text="Сохраняйте товары, которые понравились, чтобы долго не искать"
            />
         </div>
      );
   }

   return (
      <div className={`${styles.favorites__container} container`}>
         <UserFavoritesSelect products={favorites.products} setProducts={setProducts} />
         <UserFavoritesList products={products} />
         {isModalOpen && <ProductModal />}
      </div>
   );
};

export default ProfileFavorites;
