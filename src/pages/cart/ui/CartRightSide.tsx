import { FC } from 'react';

import { CartOrder } from 'src/widgets/cart';

import styles from './styles.module.scss';

export const CartRightSide: FC = () => {
   return (
      <div className={styles.cart__right}>
         <CartOrder />
      </div>
   );
};
