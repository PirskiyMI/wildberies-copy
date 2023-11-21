import { FC } from 'react';
import styles from './AddToCart.module.scss';

import { Button } from '../../../shared/ui';
import { useAddToCart } from '../model/hooks';
import { IProduct, useAppSelector } from '../../../shared/lib';

type AddToCartProps = {
   product: IProduct;
};

export const AddToCart: FC<AddToCartProps> = ({ product }) => {
   const { list } = useAppSelector((state) => state.basketListReducer);
   const inBasket = Boolean(list.find((el) => el.id === product.id));
   const { addToCart } = useAddToCart(product);

   const addToCartHandler = () => {
      if (!inBasket) {
         addToCart();
      }
   };
   return (
      <Button
         className={`${styles.button} ${inBasket ? styles.button_disabled : ''}`}
         onClick={addToCartHandler}>
         В корзин{inBasket ? 'е' : 'у'}
      </Button>
   );
};
