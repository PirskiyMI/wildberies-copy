import { FC } from 'react';

import { useAppSelector } from 'src/shared';
import {
   CartEmpty,
   CartOrder,
   CartSpoiler,
   CartPaymentMethod,
   CartUserInfo,
} from 'src/widgets/cart';

import styles from './styles.module.scss';

import { useSetCount } from '../lib';

export const CartPage: FC = () => {
   const { list } = useAppSelector((state) => state.basketReducer);

   useSetCount({ list });

   return (
      <div className={`${styles.cart__container} container`}>
         {list.length ? (
            <div className={styles.cart__wrapper}>
               <div className={`${styles.cart__column} ${styles.cart__column_big}`}>
                  <div className={styles.cart__row_big}>
                     <CartSpoiler />
                  </div>
                  <CartPaymentMethod />
                  <CartUserInfo />
               </div>
               <div className={styles.cart__column}>
                  <CartOrder />
               </div>
            </div>
         ) : (
            <CartEmpty />
         )}
      </div>
   );
};

export default CartPage;
