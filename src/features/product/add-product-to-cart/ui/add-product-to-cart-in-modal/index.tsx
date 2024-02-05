import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Button, IProduct, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';
import { useAddToCart } from '../../hooks';

type Props = {
   product: IProduct;
};

export const AddProductToCartInModal: FC<Props> = ({ product }) => {
   const { list } = useAppSelector((state) => state.basketReducer);
   const inBasket = useMemo(() => list.find((el) => el.id === product.id), [list, product.id]);
   const { addProduct } = useAddToCart(product);

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
};
