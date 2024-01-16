import { FC } from 'react';

import { useAppSelector } from 'src/shared';
import { CartEmpty, CartSlider } from 'src/widgets/cart';

import styles from './styles.module.scss';

import { useSetCount } from '../lib';
import { CartLeftSide } from './CartLeftSide';
import { CartRightSide } from './CartRightSide';

export const CartPage: FC = () => {
   const { list } = useAppSelector((state) => state.basketListReducer);
   const { list: visitedProducts } = useAppSelector((state) => state.cartSliderReducer);

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
