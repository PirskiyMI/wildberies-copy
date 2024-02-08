import { FC, memo } from 'react';

import { ProductItemCard, Rating } from 'src/shared';

import styles from './styles.module.scss';
import { IProductCard } from '../../types';

export const ProductCardUI: FC<IProductCard> = memo(
   ({ product: { title, price, rating, image }, cartButton, favoriteButton, popupHandler }) => {
      const { count, rate } = rating;

      return (
         <ProductItemCard
            top={
               <>
                  <div className={styles.card__favorite}>{favoriteButton}</div>
                  <div className={styles.card__img}>
                     <img src={image} alt={title} />
                  </div>
                  <div className={styles.card__show} onClick={popupHandler}>
                     Быстрый просмотр
                  </div>
               </>
            }
            middle={
               <>
                  <span className={`${styles.card__price}`}>{price} сом</span>
                  <h2 className={styles.card__title}>{title}</h2>
                  <Rating count={count} rate={rate} />
               </>
            }
            bottom={
               <>
                  <div className={styles.card__button}>{cartButton}</div>
               </>
            }
            className={styles.card}
         />
      );
   },
);
