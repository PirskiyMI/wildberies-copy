import { FC } from 'react';

import {
   Cards,
   cardNumberFormatter,
   masterCardExpression,
   mirCardExpression,
   visaExpression,
} from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   cardNumber: string;
   numberVisible?: boolean;
};

export const UserPaymentCardBasket: FC<Props> = ({ cardNumber, numberVisible }) => {
   const cardNumberWithoutWhiteSpaces = cardNumber.split(' ').join('');
   const maskedCardNumber = '⋅⋅ ' + cardNumberFormatter(cardNumber).split(' ')[3];

   let src;
   let alt;

   if (masterCardExpression.test(cardNumberWithoutWhiteSpaces)) {
      src = Cards.MasterCard;
      alt = 'MASTER CARD';
   } else if (mirCardExpression.test(cardNumberWithoutWhiteSpaces)) {
      src = Cards.MirCard;
      alt = 'MIR';
   } else if (visaExpression.test(cardNumberWithoutWhiteSpaces)) {
      src = Cards.VisaCard;
      alt = 'VISA';
   }

   return (
      <div className={styles.card}>
         <div className={styles.card__image}>
            <img src={src} alt={alt} />
         </div>
         <div className={styles.card__text}>
            <span>{alt} </span>
            {numberVisible ? <span>{maskedCardNumber}</span> : null}
         </div>
      </div>
   );
};
