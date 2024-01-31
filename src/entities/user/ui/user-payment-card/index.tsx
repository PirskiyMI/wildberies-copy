import { FC, ReactNode } from 'react';

import {
   Card,
   cardNumberFormatter,
   masterCardExpression,
   mirCardExpression,
   visaExpression,
} from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   cardNumber: string;
   deleteButton: ReactNode;
   toggleMain?: ReactNode;
   isDesktop?: boolean;
   className?: string;
};

export const UserPaymentCard: FC<Props> = ({
   cardNumber,
   deleteButton,
   toggleMain,
   isDesktop,
   className,
}) => {
   let classes = className ? `${className} ${styles.card} ` : styles.card;
   classes = !toggleMain ? `${classes} ${styles.card_main}` : classes;
   const cardNumberWithoutWhiteSpaces = cardNumber.split(' ').join('');
   const maskedCardNumber = '⋅⋅ ' + cardNumberFormatter(cardNumber).split(' ')[3];

   let src;
   let alt;

   if (masterCardExpression.test(cardNumberWithoutWhiteSpaces)) {
      src = 'https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png';
      alt = 'MASTER CARD';
   } else if (mirCardExpression.test(cardNumberWithoutWhiteSpaces)) {
      src = 'https://evgenykatyshev.ru/projects/mir-logo/mir-logo-h14px.svg';
      alt = 'MIR';
   } else if (visaExpression.test(cardNumberWithoutWhiteSpaces)) {
      src = 'https://cdn.worldvectorlogo.com/logos/visa-10.svg';
      alt = 'VISA';
   }

   if (isDesktop) {
      return (
         <Card className={classes}>
            <div className={styles.card__buttons}>
               {toggleMain ? (
                  <div className={styles.card__toggle}>{toggleMain}</div>
               ) : (
                  <p className={styles.card__label}>Основной способ</p>
               )}
               <div className={styles.card__delete}>{deleteButton}</div>
            </div>
            <div className={styles.card__info}>
               <div className={styles.card__text}>
                  <span>{alt} </span>
                  <span>{maskedCardNumber}</span>
               </div>
               <div className={styles.card__image}>
                  <img src={src} alt={alt} />
               </div>
            </div>
         </Card>
      );
   }

   return (
      <Card className={classes}>
         <div className={styles.card__wrapper}>
            <div className={styles.card__image}>
               <img src={src} alt={alt} />
            </div>
            <div className={styles.card__info}>
               <div className={styles.card__text}>
                  <span>{alt}</span>
                  <span>{maskedCardNumber}</span>
               </div>
               {toggleMain ? (
                  <div className={styles.card__toggle}>{toggleMain}</div>
               ) : (
                  <p className={styles.card__label}>Основной способ</p>
               )}
            </div>
         </div>
         <div className={styles.card__delete}>{deleteButton}</div>
      </Card>
   );
};
