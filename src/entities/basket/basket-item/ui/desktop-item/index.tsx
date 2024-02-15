import { FC, memo, useEffect, useState } from 'react';

import { CartItemCard } from 'src/shared';

import styles from './styles.module.scss';
import { IBasketItem } from '../../types';

export const DesktopBasketItem: FC<IBasketItem> = memo(
   ({ product: { image, price, title, status }, features: { Checkbox, Counter, Delete } }) => {
      const [productPrice, setProductPrice] = useState(price);
      const { count } = status!;

      useEffect(() => {
         setProductPrice(+price * count);
      }, [count, price]);

      return (
         <CartItemCard
            image={image}
            price={+productPrice}
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
