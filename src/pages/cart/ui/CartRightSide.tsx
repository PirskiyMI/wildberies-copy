import { FC } from 'react';

import styles from './styles.module.scss';

import { CartOrder } from '../../../widgets/cart';

export const CartRightSide: FC = () => {
   return (
      <div className={styles.cart__right}>
         <CartOrder />
      </div>
   );
};

