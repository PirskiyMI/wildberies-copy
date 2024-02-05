import { FC } from 'react';

import { useAppSelector } from 'src/shared';
import { BasketItem } from 'src/entities/basket';
import { ToggleProductToOrder } from 'src/features/product/toggle-product-to-order';
import { ProductCounter } from 'src/features/product/product-counter';
import { RemoveProductFromCart } from 'src/features/product/remove-product-from-cart';

import styles from './styles.module.scss';

export const BasketList: FC = () => {
   const { list } = useAppSelector((state) => state.basketReducer);

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
                     Like: <div>test</div>,
                  }}></BasketItem>
            </li>
         ))}
      </div>
   );
};
