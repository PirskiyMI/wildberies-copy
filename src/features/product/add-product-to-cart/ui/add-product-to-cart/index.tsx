import { FC, memo, useMemo } from 'react';

import { Button, IProduct, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { useAddToCart } from '../../hooks';

type Props = {
   product: IProduct;
};

export const AddProductToCart: FC<Props> = memo(({ product }) => {
   const { list } = useAppSelector((state) => state.basketReducer);
   const inBasket = useMemo(
      () => Boolean(list.find(({ id }) => id === product.id)),
      [list, product.id],
   );
   const { addProduct } = useAddToCart(product);

   return (
      <Button className={styles.button} disabled={inBasket} onClick={addProduct}>
         В корзин{inBasket ? 'е' : 'у'}
      </Button>
   );
});
