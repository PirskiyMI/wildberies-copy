import { FC } from 'react';

import { useAppSelector, Section, Spoiler } from 'src/shared';
import { BasketInfo, BasketItem } from 'src/entities/basket';
import { ProductCounter, ProductRemoveFromCart, ProductSelect } from 'src/features/product-actions';

import styles from './styles.module.scss';

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
      <Section className={styles.cart} title="Корзина">
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
