import { FC } from 'react';

import { useAppSelector } from 'src/shared';
import { basketListSelector } from 'src/entities/basket/basket-item';
import { MobileBasket } from 'src/widgets/basket';
import { MobileOrderInfo } from 'src/widgets/order-info';
import { MobileCartUserDetails } from 'src/widgets/user/cart-user-details';
import { MobileBasketPaymentMethod } from 'src/widgets/payment-method/basket-payment-method';

import styles from './styles.module.scss';
import { CartIsEmpty } from '../cart-is-empty';

export const CartPage: FC = () => {
   const list = useAppSelector(basketListSelector);

   return (
      <div className={`${styles.cart__container} container`}>
         {list.length ? (
            <div className={styles.cart__wrapper}>
               <div className={`${styles.cart__column} ${styles.cart__column_big}`}>
                  <div>
                     <MobileBasket />
                  </div>
                  <MobileBasketPaymentMethod />
                  <MobileCartUserDetails />
               </div>
               <div className={styles.cart__column}>
                  <MobileOrderInfo />
               </div>
            </div>
         ) : (
            <CartIsEmpty />
         )}
      </div>
   );
};
