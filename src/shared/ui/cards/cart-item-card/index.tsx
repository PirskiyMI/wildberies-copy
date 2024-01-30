import { FC, ReactNode } from 'react';

import { Price } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   image: string;
   title: string;
   counter: ReactNode;
   price: number;
   checkbox?: ReactNode;
   isElementActive?: boolean;
   isDesktop?: boolean;
   className?: string;
};

export const CartItemCard: FC<Props> = ({
   image,
   title,
   counter,
   price,
   className,
   checkbox,
   isElementActive = false,
   isDesktop = false,
}) => {
   const classes = className ? `${className} ${styles.card}` : styles.card;
   const checkboxClasses = isElementActive
      ? `${styles.card__checkbox} ${styles.card__checkbox_active}`
      : styles.card__checkbox;

   if (isDesktop) {
      return (
         <div className={classes}>
            <div className={styles.card__body}>
               <div className={styles.card__image}>
                  {checkbox ? <div className={checkboxClasses}>{checkbox}</div> : null}
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
