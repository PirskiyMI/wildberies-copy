import { FC, Children, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { Rating } from '../../../../shared/ui';
import { IProductWithRating, priceFormatter, useAppSelector } from '../../../../shared/lib';

type Props = {
   product: IProductWithRating;
   children: ReactNode;
   addToFavoriteButton?: ReactNode;
};

export const ProductCard: FC<Props> = (props) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { title, price, rating, image, isFavorite } = props.product;
   const children = Children.toArray(props.children);
   const cartPrice = priceFormatter(price);
   const count = priceFormatter(rating.count);
   const toggleFavoriteClasses = isFavorite
      ? `${styles.card__favorite} ${styles.card__favorite_active}`
      : styles.card__favorite;

   if (windowWidth >= 1024) {
      return (
         <article className={styles.card}>
            <div className={styles.card__body}>
               <Link className={styles.card__link} to="#"></Link>

               <div className={`${styles.card__wrapper} ${styles.card__wrapper_top}`}>
                  <div className={toggleFavoriteClasses}>{props.addToFavoriteButton}</div>

                  <div className={styles.card__img}>
                     <img src={image} alt={title} />
                  </div>

                  <div className={styles.card__show}>{children[0]}</div>
               </div>

               <div className={`${styles.card__wrapper} ${styles.card__wrapper_middle}`}>
                  <span className={`${styles.card__price}`}>{cartPrice} сом</span>
                  <h2 className={styles.card__title}>{title}</h2>
               </div>

               <div className={`${styles.card__wrapper} ${styles.card__wrapper_bottom}`}>
                  <Rating count={count} rate={rating.rate} />
                  <div className={styles.card__button}>{children[1]}</div>
               </div>
            </div>
         </article>
      );
   }

   return (
      <article className={styles.card}>
         <div className={styles.card__body}>
            <Link className={styles.card__link} to="#"></Link>

            <div className={`${styles.card__wrapper} ${styles.card__wrapper_top}`}>
               <div className={styles.card__img}>
                  <img src={image} alt={title} />
               </div>
            </div>

            <div className={`${styles.card__wrapper} ${styles.card__wrapper_middle}`}>
               <span className={`${styles.card__price}`}>{cartPrice} сом</span>
               <h2 className={styles.card__title}>{title}</h2>
            </div>

            <div className={`${styles.card__wrapper} ${styles.card__wrapper_bottom}`}>
               <Rating count={count} rate={rating.rate} />
               <div className={styles.card__button}>{children[1]}</div>
            </div>
         </div>
      </article>
   );
};
