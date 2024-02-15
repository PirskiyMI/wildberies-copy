import { FC, memo } from 'react';

import { BasketItem } from 'src/entities/basket/basket-item';
import { ToggleProductToOrder } from 'src/features/product/toggle-product-to-order';
import { ProductCounter } from 'src/features/product/product-counter';
import { RemoveProductFromCart } from 'src/features/product/remove-product-from-cart';

import styles from './styles.module.scss';
import { IBasketList } from '../../lib/types';

export const BasketList: FC<IBasketList> = memo(({ list }) => {
   return (
      <div className={styles.list}>
         {list.map((el) => (
            <li key={el.id} className={styles.list__item}>
               <BasketItem
                  key={el.id}
                  product={el}
                  features={{
                     Checkbox: <ToggleProductToOrder id={el.id} isChecked={el.status!.isChecked} />,
                     Counter: <ProductCounter id={el.id} value={el.status!.count} />,
                     Delete: <RemoveProductFromCart id={el.id} />,
                  }}
               />
            </li>
         ))}
      </div>
   );
});
