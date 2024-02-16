import { FC } from 'react';

import { useAppSelector } from 'src/shared';
import { basketListSelector } from 'src/entities/basket/basket-item';
import { BasketContainer } from 'src/widgets/basket';
import { DesktopOrderInfo } from 'src/widgets/order-info';
import { CartUserDetails } from 'src/widgets/user/user-details';
import { DesktopBasketPaymentMethod } from 'src/widgets/payment-method/basket-payment-method';

import styles from './styles.module.scss';
import { CartIsEmpty } from './cart-is-empty';

export const CartPage: FC = () => {
   const list = useAppSelector(basketListSelector);

   return (
      <div className={`${styles.cart__container} container`}>
         {list.length ? (
            <div className={styles.cart__wrapper}>
               <div className={`${styles.cart__column} ${styles.cart__column_big}`}>
                  <div className={styles.cart__row_big}>
                     <BasketContainer />
                  </div>
                  <DesktopBasketPaymentMethod />
                  <CartUserDetails />
               </div>
               <div className={styles.cart__column}>
                  <DesktopOrderInfo />
               </div>
            </div>
         ) : (
            <CartIsEmpty />
         )}
      </div>
   );
};
