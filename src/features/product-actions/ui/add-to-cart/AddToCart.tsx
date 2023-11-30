import { FC } from 'react';
import styles from './AddToCart.module.scss';

import { useAddToCart } from '../../lib/hooks/useAddToCart';
import { IProduct, useAppSelector } from '../../../../shared/lib';
import { Button } from '../../../../shared/ui';

type Props = {
   product: IProduct;
};

export const AddToCart: FC<Props> = ({ product }) => {
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
