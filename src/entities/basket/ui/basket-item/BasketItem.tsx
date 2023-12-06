import styles from './BasketItem.module.scss';

import { FC, ReactNode, useEffect, useState } from 'react';

import { Price } from '../../../../shared/ui';
import { IProductWithStatus, useAppSelector } from '../../../../shared/lib';

type Props = {
   product: IProductWithStatus;
   features: {
      Checkbox: ReactNode;
      Counter: ReactNode;
      Like: ReactNode;
      Delete: ReactNode;
   };
};

export const BasketItem: FC<Props> = ({ product, features }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { image, price, status, title } = product;
   const [productPrice, setProductPrice] = useState<number>(price);
   const { Checkbox, Counter, Delete, Like } = features;
   const { count } = status;

   useEffect(() => {
      setProductPrice(price * count);
   }, [count, price]);

   if (windowWidth >= 1024) {
      console.log(windowWidth);

      return (
         <article className={styles.item}>
            <div className={styles.item__left}>
               <label className={styles.item__label}>
                  <div className={styles.item__checkbox}>{Checkbox}</div>
                  <img className={styles.item__image} src={image} alt="Изображение" />
               </label>
               <div className={styles.item__body}>
                  <span className={styles.item__name}>{title}</span>
                  <div className={styles.item__info}>
                     <span className={styles.item__location}>Коледино WB</span>
                     <span className={styles.item__location}>OOO Вайлдберриз</span>
                  </div>
               </div>
            </div>

            <div className={styles.item__right}>
               <div className={styles.item__actions}>
                  {Counter}
                  <div className={styles.item__buttons}>
                     {Like}
                     {Delete}
                  </div>
               </div>
               <Price className={styles.item__price} price={productPrice}></Price>
            </div>
         </article>
      );
   }

   return (
      <article className={styles.item}>
         <div className={styles.item__left}>
            <label className={styles.item__label}>
               <div className={styles.item__checkbox}>{Checkbox}</div>
               <img className={styles.item__image} src={image} alt="Изображение" />
            </label>
            <div className={styles.item__body}>
               <Price className={styles.item__price} price={productPrice}></Price>
               <span className={styles.item__name}>{title}</span>
               <div className={styles.item__info}>
                  <span className={styles.item__location}>Коледино WB</span>
                  <span className={styles.item__location}>OOO Вайлдберриз</span>
               </div>
            </div>
         </div>
         <div className={styles.item__right}>
            <div className={styles.item__actions}>{Counter}</div>
            <div className={styles.item__buttons}>
               {Like}
               {Delete}
            </div>
         </div>
      </article>
   );
};
