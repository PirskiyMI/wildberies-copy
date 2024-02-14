import { FC, memo } from 'react';

import { Button } from 'src/shared';

import styles from './styles.module.scss';
import { IAddProductToCartProps } from '../../lib/types';

export const AddProductToCart: FC<IAddProductToCartProps> = memo(({ inBasket, clickHandler }) => {
   return (
      <Button className={styles.button} disabled={inBasket} onClick={clickHandler}>
         В корзин{inBasket ? 'е' : 'у'}
      </Button>
   );
});
