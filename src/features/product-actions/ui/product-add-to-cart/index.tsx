import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
   Button,
   IProduct,
   closeModal,
   setProductToModal,
   useAppDispatch,
   useAppSelector,
} from 'src/shared';
import { useAddToCart } from '../../lib';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
   inBasket?: boolean;
};

export const ProductAddToCart: FC<Props> = ({ product }) => {
   const { list } = useAppSelector((state) => state.basketListReducer);
   const inBasket = Boolean(list.find((el) => el.id === product.id));
   const { addToCart } = useAddToCart(product);

   const clickHandler = () => {
      if (!inBasket) {
         addToCart();
      }
   };
   return (
      <Button
         className={`${styles.button} ${inBasket ? styles.button_disabled : ''}`}
         onClick={clickHandler}>
         В корзин{inBasket ? 'е' : 'у'}
      </Button>
   );
};

export const ProductQuickViewAddToCart: FC<Props> = ({ product, inBasket }) => {
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
            <Button className={`${styles.button} ${styles.button_link}`} onClick={closeHandler}>
               <Link to="/cart">Перейти в корзину</Link>
            </Button>
         ) : (
            <Button className={styles.button} onClick={clickHandler}>
               Добавить в корзину
            </Button>
         )}
      </>
   );
};
