import { FC } from 'react';

import styles from './styles.module.scss';

import { Payment } from '../../../widgets/payment';
import { Recipient } from '../../../widgets/recipient';
import { CartSpoiler } from '../../../widgets/cart';

export const CartLeftSide: FC = () => {
   return (
      <div className={styles.cart__left}>
         <CartSpoiler />
         <Payment />
         <Recipient />
      </div>
   );
};
