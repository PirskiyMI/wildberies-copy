import { FC, memo } from 'react';

import { Button } from 'src/shared';

import styles from './styles.module.scss';
import { useAddToCart } from '../../lib/hooks';
import { IAddProductToCartProps } from '../../lib/types';

export const AddProductToCart: FC<IAddProductToCartProps> = memo(({ product, inBasket }) => {
   const addProduct = useAddToCart(product);

   return (
      <Button className={styles.button} disabled={inBasket} onClick={addProduct}>
         В корзин{inBasket ? 'е' : 'у'}
      </Button>
   );
});
