import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';

const UserFavoriteTop: FC = () => {
   return <h2 className={styles.favorite__title}>Избранное</h2>;
};
const UserFavoriteBottom: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const [productsLeft, setProductsLeft] = useState(0);

   const productsList = favorites.products.filter((el, index) => index <= 6);

   useEffect(() => {
      if (favorites.products.length > 7)
         setProductsLeft(favorites.products.length - productsList.length);
   }, [favorites.products]);

   return (
      <div className={styles.favorite__bottom}>
         {productsList.length > 0 ? (
            <ul className={styles.favorite__list}>
               {productsList.map((el) => (
                  <li className={styles.favorite__item}>
                     <img className={styles.favorite__image} src={el.image} alt={el.title} />
                  </li>
               ))}
               {productsLeft > 0 && (
                  <li className={`${styles.favorite__item} ${styles.favorite__item_left}`}>
                     +{productsLeft}
                  </li>
               )}
            </ul>
         ) : (
            <>
               <p className={styles.favorite__text}>В избранном пока пусто.</p>
               <p className={styles.favorite__text}>Сохраняйте товары, чтобы долго не искать</p>
            </>
         )}
      </div>
   );
};

export const UserFavorite: FC = () => {
   return (
      <div className={styles.favorite}>
         <UserFavoriteTop />
         <UserFavoriteBottom />
      </div>
   );
};
