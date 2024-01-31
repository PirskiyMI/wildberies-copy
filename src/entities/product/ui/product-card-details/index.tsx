import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { IProduct, Icon, Rating, priceFormatter } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
   closePopup: () => void;
   AddToCartButton: ReactNode;
};

export const ProductCardDetails: FC<Props> = ({ product, closePopup, AddToCartButton }) => {
   const { image, price, rating, title } = product;
   const { count, rate } = rating;
   const formattedPrice = priceFormatter(price);

   return (
      <div className={styles.card}>
         <div className={styles.card__image}>
            <img src={image} alt="Картинка продукта" />
         </div>

         <div className={styles.card__body}>
            <button className={styles.card__cross} onClick={closePopup}>
               <Icon className={styles.card__icon} icon={'cross'} />
            </button>

            <div className={styles.card__wrapper}>
               <div className={styles.card__header}>
                  <Link className={styles.card__link} to={'#'}>
                     <span className={styles.card__title}>{title}</span>
                  </Link>
                  <Rating count={count} rate={rate} />
               </div>

               <div className={styles.card__content}>
                  <div className={styles.card__price}>{formattedPrice} сом</div>
                  <div className={styles.card__description}>
                     <span>Описание:</span> {/* {info!.description} */}
                  </div>

                  <div className={styles.card__button}>{AddToCartButton}</div>
               </div>
            </div>
         </div>
      </div>
   );
};
