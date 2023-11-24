import styles from './Cart.module.scss';

import { FC } from 'react';

import Payment from '../../../widgets/payment/Payment';
import Recipient from '../../../widgets/recipient/Recipient';
import { CartSpoiler } from '../../../widgets/cart/cart-spoiler/ui/CartSpoiler';

const CartLeftSide: FC = () => {
   return (
      <div className={styles.cart__left}>
         <CartSpoiler />
         <Payment />
         <Recipient />
      </div>
   );
};

export default CartLeftSide;
