import { FC, memo } from 'react';

import { CartItemCard } from 'src/shared';

import styles from './styles.module.scss';
import { IBasketItem } from '../../lib/types';

export const DesktopBasketItem: FC<IBasketItem> = memo(
   ({ product: { image, price, title, status }, features: { Checkbox, Counter, Delete } }) => {
      return (
         <CartItemCard
            image={image}
            price={+price}
            title={title}
            checkbox={Checkbox}
            counter={
               <div className={styles.item__counter}>
                  {Counter}
                  <div className={styles.item__buttons}>{Delete}</div>
               </div>
            }
            isElementActive={status!.isChecked}
            isDesktop
            className={styles.item}
         />
      );
   },
);
