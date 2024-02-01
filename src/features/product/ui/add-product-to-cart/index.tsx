import { FC, useMemo } from 'react';

import { Button, IProduct, useAppSelector } from 'src/shared';
import { useAddToCart } from '../../lib';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
};

export const AddProductToCart: FC<Props> = ({ product }) => {
   const { list } = useAppSelector((state) => state.basketListReducer);
   const inBasket = useMemo(() => list.find((el) => el.id === product.id), [list, product.id]);
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
