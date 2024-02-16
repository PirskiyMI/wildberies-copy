import { FC, memo } from 'react';

import { DesktopBasketItem, MobileBasketItem } from 'src/entities/basket/basket-item';
import { ToggleProductToOrder } from 'src/features/product/toggle-product-to-order';
import { ProductCounter } from 'src/features/product/product-counter';
import { RemoveProductFromCart } from 'src/features/product/remove-product-from-cart';

import styles from './styles.module.scss';
import { IBasketList } from '../../lib/types';
import { useAppSelector, windowWidthSelector } from 'src/shared';

export const BasketList: FC<IBasketList> = memo(({ list }) => {
   const windowWidth = useAppSelector(windowWidthSelector);

   if (!windowWidth) return null;

   return (
      <>
         {windowWidth >= 1024 ? (
            <div className={styles.list}>
               {list.map((el) => (
                  <li key={el.id} className={styles.list__item}>
                     <DesktopBasketItem
                        key={el.id}
                        product={el}
                        features={{
                           Checkbox: (
                              <ToggleProductToOrder id={el.id} isChecked={el.status!.isChecked} />
                           ),
                           Counter: <ProductCounter id={el.id} value={el.status!.count} />,
                           Delete: <RemoveProductFromCart id={el.id} />,
                        }}
                     />
                  </li>
               ))}
            </div>
         ) : (
            <div className={styles.list}>
               {list.map((el) => (
                  <li key={el.id} className={styles.list__item}>
                     <MobileBasketItem
                        key={el.id}
                        product={el}
                        features={{
                           Checkbox: (
                              <ToggleProductToOrder id={el.id} isChecked={el.status!.isChecked} />
                           ),
                           Counter: <ProductCounter id={el.id} value={el.status!.count} />,
                           Delete: <RemoveProductFromCart id={el.id} />,
                        }}
                     />
                  </li>
               ))}
            </div>
         )}
      </>
   );
});
