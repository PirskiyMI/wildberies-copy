import { FC, useEffect, useState } from 'react';

import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { ProfileItem } from '../profile-item';

export const ProfileFavorites: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const [productsLeft, setProductsLeft] = useState(0);

   const productsList = favorites.products.filter((el, index) => index <= 6);

   useEffect(() => {
      if (favorites.products.length > 7)
         setProductsLeft(favorites.products.length - productsList.length);
   }, [favorites.products]);

   return (
      <ProfileItem
         path="/profile/purchases"
         title={<h2 className={styles.favorites__title}>Избранное</h2>}
         label={
            <div className={styles.favorites__content}>
               {productsList.length > 0 ? (
                  <ul className={styles.favorites__list}>
                     {productsList.map((el) => (
                        <li className={styles.favorites__item}>
                           <img className={styles.favorites__image} src={el.image} alt={el.title} />
                        </li>
                     ))}
                     {productsLeft > 0 && (
                        <li className={`${styles.favorites__item} ${styles.favorites__item_left}`}>
                           +{productsLeft}
                        </li>
                     )}
                  </ul>
               ) : (
                  <>
                     <p className={styles.favorites__text}>В избранном пока пусто.</p>
                     <p className={styles.favorites__text}>
                        Сохраняйте товары, чтобы долго не искать
                     </p>
                  </>
               )}
            </div>
         }
      />
   );
};
