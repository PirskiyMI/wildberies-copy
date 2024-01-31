import { FC } from 'react';

import { useAppSelector, Section, Spoiler } from 'src/shared';
import { BasketInfo, BasketItem } from 'src/entities/basket';
import { ProductCounter, RemoveProductFromCart, ToggleProductToOrder } from 'src/features/product';

import styles from './styles.module.scss';

const CartList: FC = () => {
   const { list } = useAppSelector((state) => state.basketListReducer);

   return (
      <div className={styles.list}>
         {list.map((el) => (
            <li className={styles.list__item}>
               <BasketItem
                  key={el.id}
                  product={el}
                  features={{
                     Checkbox: <ToggleProductToOrder id={el.id} isChecked={el.status.isChecked} />,
                     Counter: <ProductCounter id={el.id} value={el.status.count} />,
                     Delete: <RemoveProductFromCart id={el.id} />,
                     Like: <div>test</div>,
                  }}></BasketItem>
            </li>
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
