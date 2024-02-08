import { FC, memo } from 'react';

import { Button, IProduct, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { useAddToCart } from '../../hooks';
import { inBasketSelector } from 'src/entities/basket/basket-item';

type Props = {
   product: IProduct;
};

export const AddProductToCart: FC<Props> = memo(({ product }) => {
   const inBasket = useAppSelector((state) => inBasketSelector(state, product.id));
   const { addProduct } = useAddToCart(product);

   return (
      <Button className={styles.button} disabled={inBasket} onClick={addProduct}>
         В корзин{inBasket ? 'е' : 'у'}
      </Button>
   );
});
