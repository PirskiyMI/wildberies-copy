import styles from './Cart.module.scss';

import { FC } from 'react';

import { Payment } from '../../../widgets/payment';
import { Recipient } from '../../../widgets/recipient';
import { CartSpoiler } from '../../../widgets/cart';

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
