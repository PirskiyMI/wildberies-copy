import { FC, ReactNode } from 'react';

import { IProductWithRating, ProductItemCard, Rating, priceFormatter } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   product: IProductWithRating;
   FavoriteButton: ReactNode;
   ModalButton: ReactNode;
   CartButton: ReactNode;
};

export const ProductCard: FC<Props> = ({ product, CartButton, FavoriteButton, ModalButton }) => {
   const { title, price, rating, image, isFavorite } = product;
   const cartPrice = priceFormatter(price);
   const count = priceFormatter(rating.count);
   const toggleFavoriteClasses = isFavorite
      ? `${styles.card__favorite} ${styles.card__favorite_active}`
      : styles.card__favorite;

   return (
      <ProductItemCard
         top={
            <>
               <div className={toggleFavoriteClasses}>{FavoriteButton}</div>
               <div className={styles.card__img}>
                  <img src={image} alt={title} />
               </div>
               <div className={styles.card__show}>{ModalButton}</div>
            </>
         }
         middle={
            <>
               <span className={`${styles.card__price}`}>{cartPrice} сом</span>
               <h2 className={styles.card__title}>{title}</h2>
               <Rating count={count} rate={rating.rate} />
            </>
         }
         bottom={
            <>
               <div className={styles.card__button}>{CartButton}</div>
            </>
         }
         className={styles.card}
      />
   );
};
