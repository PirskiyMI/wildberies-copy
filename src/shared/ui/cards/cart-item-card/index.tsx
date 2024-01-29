import { FC, ReactNode } from 'react';

import { Price } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   image: string;
   title: string;
   counter: ReactNode;
   price: number;
   className?: string;
   isDesktop?: boolean;
   checkbox?: ReactNode;
};

export const CartItemCard: FC<Props> = ({
   image,
   title,
   counter,
   price,
   className,
   checkbox,
   isDesktop = false,
}) => {
   const classes = className ? `${className} ${styles.card}` : styles.card;

   if (isDesktop) {
      return (
         <div className={classes}>
            <div className={styles.card__body}>
               <div className={styles.card__image}>
                  {checkbox ? <div className={styles.card__checkbox}>{checkbox}</div> : null}
                  <img src={image} alt="Изображение" />
               </div>
               <div className={styles.card__title}>{title}</div>
            </div>
            <div className={styles.card__content}>
               <div className={styles.card__counter}>{counter}</div>
               <Price className={styles.card__price} price={price}></Price>
            </div>
         </div>
      );
   }
   return (
      <div className={classes}>
         <div className={styles.card__body}>
            <div className={styles.card__image}>
               {checkbox ? <div className={styles.card__checkbox}>{checkbox}</div> : null}
               <img src={image} alt="Изображение" />
            </div>
            <div className={styles.card__wrapper}>
               <Price className={styles.card__price} price={price}></Price>
               <div className={styles.card__title}>{title}</div>
            </div>
         </div>
         <div className={styles.card__content}>
            <div className={styles.card__counter}>{counter}</div>
         </div>
      </div>
   );
};
