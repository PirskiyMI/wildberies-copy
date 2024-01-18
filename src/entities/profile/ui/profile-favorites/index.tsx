import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Tile, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileFavorites: FC<Props> = ({ className }) => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const [productsLeft, setProductsLeft] = useState(0);

   const classes = className ? `${className} ${styles.favorites}` : styles.favorites;
   const productsList = favorites.products.filter((el, index) => index <= 6);

   useEffect(() => {
      if (favorites.products.length > 7)
         setProductsLeft(favorites.products.length - productsList.length);
   }, [favorites.products]);

   return (
      <Tile className={classes}>
         <Link className={styles.favorites__wrapper} to="/pforile/favorites">
            <h2 className={styles.favorites__title}>Избранное</h2>
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
         </Link>
      </Tile>
   );
};
