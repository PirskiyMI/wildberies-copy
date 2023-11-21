import { CartOrder } from '../../../widgets/cart/cart-order/ui/CartOrder';
import styles from './Cart.module.scss';

import { FC } from 'react';

const CartRightSide: FC = () => {
   return (
      <div className={styles.cart__right}>
         <CartOrder />
      </div>
   );
};

export default CartRightSide;
