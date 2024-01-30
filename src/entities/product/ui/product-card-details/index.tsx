import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import {
   IProductWithRating,
   Icon,
   Rating,
   closeModal,
   priceFormatter,
   setProductToModal,
   useAppDispatch,
} from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   product: IProductWithRating;
   Button: ReactNode;
};

export const ProductCardDetails: FC<Props> = ({ product, Button }) => {
   const { description, image, price, rating, title } = product;
   const formattedPrice = priceFormatter(price);
   const dispatch = useAppDispatch();

   const closeHandler = () => {
      dispatch(closeModal());
      dispatch(setProductToModal(null));
   };

   return (
      <div className={styles.card}>
         <div className={styles.card__image}>
            <img src={image} alt="Картинка продукта" />
         </div>

         <div className={styles.card__body}>
            <button className={styles.card__cross} onClick={closeHandler}>
               <Icon className={styles.card__icon} icon={'cross'} />
            </button>

            <div className={styles.card__wrapper}>
               <div className={styles.card__header}>
                  <Link className={styles.card__link} to={'#'}>
                     <span className={styles.card__title}>{title}</span>
                  </Link>
                  <Rating count={rating.count} rate={rating.rate} />
               </div>

               <div className={styles.card__content}>
                  <div className={styles.card__price}>{formattedPrice} сом</div>
                  <div className={styles.card__description}>
                     <span>Описание:</span> {description}
                  </div>

                  <div className={styles.card__button}>{Button}</div>
               </div>
            </div>
         </div>
      </div>
   );
};
