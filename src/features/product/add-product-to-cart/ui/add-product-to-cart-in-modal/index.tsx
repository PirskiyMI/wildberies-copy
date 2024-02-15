import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'src/shared';

import styles from './styles.module.scss';
import { IAddProductToCartProps } from '../../types';

export const AddProductToCartInModal: FC<IAddProductToCartProps> = memo(
   ({ inBasket, clickHandler }) => {
      return (
         <>
            {inBasket ? (
               <Button className={styles.button}>
                  <Link to="/cart" className={styles.button__link}>
                     <span>Перейти в корзину</span>
                  </Link>
               </Button>
            ) : (
               <Button className={styles.button} onClick={clickHandler}>
                  Добавить в корзину
               </Button>
            )}
         </>
      );
   },
);
