import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon, Rating } from 'src/shared';

import styles from './styles.module.scss';
import { IProductCard } from '../../types';

// ToDo {info!.description}

export const ProductCardDetailsUI: FC<IProductCard> = ({
   product: { image, price, rating, title },
   cartButton,
   popupHandler,
}) => {
   const { count, rate } = rating;

   return (
      <div className={styles.card}>
         <div className={styles.card__image}>
            <img src={image} alt="Картинка продукта" />
         </div>

         <div className={styles.card__body}>
            <button className={styles.card__cross} onClick={popupHandler}>
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
                  <div className={styles.card__price}>{price} сом</div>
                  <div className={styles.card__description}>
                     <span>Описание:</span> {/* {info!.description} */}
                  </div>

                  <div className={styles.card__button}>{cartButton}</div>
               </div>
            </div>
         </div>
      </div>
   );
};
