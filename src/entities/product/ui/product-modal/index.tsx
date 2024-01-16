import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { closeModal, setProductToModal } from '../../../../shared/model';
import { Icon, Rating } from '../../../../shared/ui';
import { IProductWithRating, priceFormatter, useAppDispatch } from '../../../../shared/lib';

type Props = {
   product: IProductWithRating;
   Button: ReactNode;
};

export const ProductModal: FC<Props> = ({ product, Button }) => {
   const { description, image, price, rating, title } = product;
   const formattedPrice = priceFormatter(price);
   const dispatch = useAppDispatch();

   const closeHandler = () => {
      dispatch(closeModal());
      dispatch(setProductToModal(null));
   };

   return (
      <div className={styles.body}>
         <div className={styles.body__left}>
            <img src={image} alt="Картинка продукта" />
         </div>

         <div className={styles.body__right}>
            <button className={styles.body__cross} onClick={closeHandler}>
               <Icon className={styles.body__icon} icon={'cross'} />
            </button>

            <div className={styles.body__wrapper}>
               <div className={styles.body__header}>
                  <Link className={styles.body__link} to={'#'}>
                     <span className={styles.body__title}>{title}</span>
                  </Link>
                  <Rating count={rating.count} rate={rating.rate} />
               </div>

               <div className={styles.body__content}>
                  <div className={styles.body__price}>{formattedPrice} сом</div>
                  <div className={styles.body__description}>
                     <span>Описание:</span> {description}
                  </div>

                  <div className={styles.body__button}>{Button}</div>
               </div>
            </div>
         </div>
      </div>
   );
};
