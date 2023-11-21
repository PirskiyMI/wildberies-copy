import styles from './ProductCard.module.scss';

import { FC, Children, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Rating } from '../../../shared/ui';
import { IProductWithRating, priceFormatter } from '../../../shared/lib';

type Props = {
   product: IProductWithRating;
   children: ReactNode;
};

export const ProductCard: FC<Props> = (props) => {
   const { title, price, rating, image } = props.product;
   const children = Children.toArray(props.children);
   const cartPrice = priceFormatter(price);
   const count = priceFormatter(rating.count);

   return (
      <article className={styles.card}>
         <div className={styles.card__body}>
            <Link className={styles.card__link} to="#"></Link>

            <div className={`${styles.card__wrapper} ${styles.card__wrapper_top}`}>
               <img src={image} alt={title} />
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
};
