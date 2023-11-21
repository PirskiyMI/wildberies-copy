import { FC } from 'react';

import styles from './Cart.module.scss';

import CartLeftSide from './CartLeftSide';
import CartRightSide from './CartRightSide';
import { useAppSelector } from '../../../shared/lib';
import { useSetCount } from '../lib/hooks/useSetCount';
import { CartEmpty } from '../../../widgets/cart/cart-empty';
import { CartSlider } from '../../../widgets/cart';

export const CartPage: FC = () => {
   const { list } = useAppSelector((state) => state.basketListReducer);
   const { list: visitedProducts } = useAppSelector((state) => state.productVisitedListSlice);

   useSetCount({ list });

   if (list.length <= 0) {
      return (
         <>
            <div className={`${styles.cart__container}  container`}>
               <CartEmpty />
            </div>
            {visitedProducts.length ? (
               <div className={styles.cart__bottom}>
                  <div className={`${styles.cart__container} container`}>
                     <CartSlider />
                  </div>
               </div>
            ) : null}
         </>
      );
   }

   return (
      <>
         <div className={`${styles.cart__container} container`}>
            <CartLeftSide />
            <CartRightSide />
         </div>
         {visitedProducts.length ? (
            <div className={styles.cart__bottom}>
               <div className={`${styles.cart__container} container`}>
                  <CartSlider />
               </div>
            </div>
         ) : null}
      </>
   );
};

export default CartPage;
