import { FC } from 'react';

import { Payment } from 'src/widgets/payment';
import { Recipient } from 'src/widgets/recipient';
import { CartSpoiler } from 'src/widgets/cart';

import styles from './styles.module.scss';

export const CartLeftSide: FC = () => {
   return (
      <div className={styles.cart__left}>
         <CartSpoiler />
         <Payment />
         <Recipient />
      </div>
   );
};
