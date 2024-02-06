import { FC } from 'react';

import { useAppSelector } from 'src/shared';
import { useGetOrderTotals } from 'src/entities/order';
import { Basket } from 'src/widgets/basket';
import { OrderInfo } from 'src/widgets/order-info';
import { CartUserDetails } from 'src/widgets/user/user-details';
import { BasketPaymentMethod } from 'src/widgets/payment-method/basket-payment-method';

import styles from './styles.module.scss';
import { CartIsEmpty } from './cart-is-empty';
import { useGetBasketTotals } from 'src/entities/basket/basket-total-count/hooks';

export const CartPage: FC = () => {
   const { list } = useAppSelector((state) => state.basketReducer);
   useGetBasketTotals(list);
   useGetOrderTotals(list);

   return (
      <div className={`${styles.cart__container} container`}>
         {list.length ? (
            <div className={styles.cart__wrapper}>
               <div className={`${styles.cart__column} ${styles.cart__column_big}`}>
                  <div className={styles.cart__row_big}>
                     <Basket />
                  </div>
                  <BasketPaymentMethod />
                  <CartUserDetails />
               </div>
               <div className={styles.cart__column}>
                  <OrderInfo />
               </div>
            </div>
         ) : (
            <CartIsEmpty />
         )}
      </div>
   );
};

export default CartPage;
