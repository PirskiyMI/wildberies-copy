import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, IProduct, closeModal, setProductToModal, useAppDispatch } from 'src/shared';

import styles from './styles.module.scss';
import { useAddToCart } from '../..';

type Props = {
   product: IProduct;
   inBasket?: boolean;
};

export const AddProductToCartInModal: FC<Props> = ({ product, inBasket }) => {
   const { addToCart } = useAddToCart(product);
   const dispatch = useAppDispatch();

   const closeHandler = () => {
      dispatch(closeModal());
      dispatch(setProductToModal(null));
   };

   const clickHandler = () => {
      addToCart();
   };

   return (
      <>
         {inBasket ? (
            <Button className={styles.button} onClick={closeHandler}>
               <Link to="/cart" className={styles.button__link}>
                  <span>Перейти в корзину</span>
               </Link>
            </Button>
         ) : (
            <Button className={styles.button} onClick={clickHandler}>
               Добавить в корзину
            </Button>
         )}
      </>
   );
};
