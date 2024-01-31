import { FC, ReactNode, memo } from 'react';

import { IProduct, ProductItemCard, Rating, priceFormatter } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
   FavoriteButton: ReactNode;
   CartButton: ReactNode;
   openPopup: () => void;
};

export const ProductCard: FC<Props> = memo(
   ({
      product: { title, price, rating, image, isFavorite },
      CartButton,
      FavoriteButton,
      openPopup,
   }) => {
      const { count, rate } = rating;
      const formattedPrice = priceFormatter(price);
      const formattedCount = priceFormatter(count);
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
                  <div className={styles.card__show} onClick={openPopup}>
                     Быстрый просмотр
                  </div>
               </>
            }
            middle={
               <>
                  <span className={`${styles.card__price}`}>{formattedPrice} сом</span>
                  <h2 className={styles.card__title}>{title}</h2>
                  <Rating count={formattedCount} rate={rate} />
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
   },
);
