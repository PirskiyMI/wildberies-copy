import { FC } from 'react';
import styles from './CartSpoiler.module.scss';

import { useAppSelector } from '../../../../shared/lib';
import { Section, Spoiler, Title } from '../../../../shared/ui';

import { BasketInfo, BasketItem } from '../../../../entities/basket';

import { ToggleSelectedProduct } from '../../../../features/toggle-selected-product';
import { ProductCounter } from '../../../../features/product-counter';
import { DeleteFromCart } from '../../../../features/delete-from-cart';
import { ToggleToFavorite } from '../../../../features/toggle-to-favorite';

const CartList: FC = () => {
   const { list } = useAppSelector((state) => state.basketListReducer);

   return (
      <div className={styles.list}>
         {list.map((el) => (
            <BasketItem
               key={el.id}
               product={el}
               features={{
                  Checkbox: <ToggleSelectedProduct id={el.id} isChecked={el.status.isChecked} />,
                  Counter: <ProductCounter id={el.id} value={el.status.count} />,
                  Delete: <DeleteFromCart id={el.id} />,
                  Like: <ToggleToFavorite />,
               }}></BasketItem>
         ))}
      </div>
   );
};

export const CartSpoiler: FC = () => {
   return (
      <Section className={styles.cart}>
         <Title>Корзина</Title>
         <Spoiler
            initial
            Title={<BasketInfo />}
            Content={
               <div className={styles.cart__body}>
                  <CartList />
               </div>
            }></Spoiler>
      </Section>
   );
};
