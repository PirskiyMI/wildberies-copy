import { FC } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';
import { Section, Spoiler } from '../../../../shared/ui';
import { BasketInfo, BasketItem } from '../../../../entities/basket';
import {
   ProductCounter,
   ProductRemoveFromCart,
   ProductSelect,
} from '../../../../features/product-actions';

const CartList: FC = () => {
   const { list } = useAppSelector((state) => state.basketListReducer);

   return (
      <div className={styles.list}>
         {list.map((el) => (
            <BasketItem
               key={el.id}
               product={el}
               features={{
                  Checkbox: <ProductSelect id={el.id} isChecked={el.status.isChecked} />,
                  Counter: <ProductCounter id={el.id} value={el.status.count} />,
                  Delete: <ProductRemoveFromCart id={el.id} />,
                  Like: <div />,
               }}></BasketItem>
         ))}
      </div>
   );
};

export const CartSpoiler: FC = () => {
   const { count, price } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <Section className={styles.cart}>
         <h2>Корзина</h2>
         <Spoiler
            initial
            Title={<BasketInfo count={count} price={price} />}
            Content={
               <div className={styles.cart__body}>
                  <CartList />
               </div>
            }></Spoiler>
      </Section>
   );
};
