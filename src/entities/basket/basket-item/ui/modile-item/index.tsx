import { FC, memo, useEffect, useState } from 'react';

import { MobileCartItemCard, Price } from 'src/shared';

import styles from './styles.module.scss';
import { IBasketItem } from '../../types';

export const MobileBasketItem: FC<IBasketItem> = memo(
   ({ product: { image, price, title, status }, features: { Checkbox, Counter, Delete } }) => {
      const [productPrice, setProductPrice] = useState(+price);
      const { count } = status!;

      useEffect(() => {
         setProductPrice(+price * count);
      }, [count, price]);

      return (
         <MobileCartItemCard
            imageComponent={
               <div className={styles.item__image}>
                  <div className={styles.item__checkbox}>{Checkbox}</div>
                  <img src={image} alt="Изображение" />
               </div>
            }
            contentComponent={<div className={styles.item__title}>{title}</div>}
            counterComponent={
               <div className={styles.item__counter}>
                  {Counter}
                  <div className={styles.item__buttons}>{Delete}</div>
               </div>
            }
            totalComponent={<Price className={styles.item__price} price={productPrice}></Price>}
            className={styles.item}
         />
      );
   },
);
