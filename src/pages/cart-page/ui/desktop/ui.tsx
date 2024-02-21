import { FC, memo } from 'react';

import { DesktopBasket } from 'src/widgets/basket';
import { DesktopOrderInfo } from 'src/widgets/order-info';
import { DesktopCartUserDetails } from 'src/widgets/user/cart-user-details';
import { DesktopBasketPaymentMethod } from 'src/widgets/payment-method/basket-payment-method';

import styles from './styles.module.scss';
import { CartIsEmpty } from '../cart-is-empty';

interface ICartPageProps {
   isBasketEmpty: boolean;
}

console.log(1);

export const CartPage: FC<ICartPageProps> = memo(({ isBasketEmpty }) => {
   return (
      <div className={`${styles.cart__container} container`}>
         {!isBasketEmpty ? (
            <div className={styles.cart__wrapper}>
               <div className={`${styles.cart__column} ${styles.cart__column_big}`}>
                  <div className={styles.cart__row_big}>
                     <DesktopBasket />
                  </div>
                  <DesktopBasketPaymentMethod />
                  <DesktopCartUserDetails />
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
});
