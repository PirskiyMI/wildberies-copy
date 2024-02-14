import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'src/shared';

import styles from './styles.module.scss';
import { useAddToCart } from '../../lib/hooks';
import { IAddProductToCartProps } from '../../lib/types';

export const AddProductToCartInModal: FC<IAddProductToCartProps> = memo(({ product, inBasket }) => {
   const addProduct = useAddToCart(product);

   return (
      <>
         {inBasket ? (
            <Button className={styles.button}>
               <Link to="/cart" className={styles.button__link}>
                  <span>Перейти в корзину</span>
               </Link>
            </Button>
         ) : (
            <Button className={styles.button} onClick={addProduct}>
               Добавить в корзину
            </Button>
         )}
      </>
   );
});
