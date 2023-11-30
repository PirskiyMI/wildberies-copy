import { FC } from 'react';
import styles from './AddToCart.module.scss';
import { Link } from 'react-router-dom';
import { useAddToCart } from '../../lib/hooks/useAddToCart';
import { IProduct, useAppDispatch } from '../../../../shared/lib';
import { closeModal, setProductToModal } from '../../../../shared/model';
import { Button } from '../../../../shared/ui';

type Props = {
   product: IProduct;
   inBasket: boolean;
};

export const QuickViewAddToCart: FC<Props> = ({ product, inBasket }) => {
   const { addToCart } = useAddToCart(product);
   const dispatch = useAppDispatch();

   const closeHandler = () => {
      dispatch(closeModal());
      dispatch(setProductToModal(null));
   };

   const addProductHandler = () => {
      addToCart();
   };

   return (
      <>
         {inBasket ? (
            <Button className={`${styles.button} ${styles.button_link}`} onClick={closeHandler}>
               <Link to="/cart">Перейти в корзину</Link>
            </Button>
         ) : (
            <Button className={styles.button} onClick={addProductHandler}>
               Добавить в корзину
            </Button>
         )}
      </>
   );
};
