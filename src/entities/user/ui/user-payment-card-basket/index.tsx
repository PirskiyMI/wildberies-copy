import { FC } from 'react';

import { cardNumberFormatter, useExpression } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   cardNumber: string;
   numberVisible?: boolean;
};

export const UserPaymentCardBasket: FC<Props> = ({ cardNumber, numberVisible }) => {
   const { cardRegExps } = useExpression();
   const { masterCardRegExp, mirCardRegExp, visaCardRegExp } = cardRegExps;
   const cardNumberWithoutWhiteSpaces = cardNumber.split(' ').join('');
   const maskedCardNumber = '⋅⋅ ' + cardNumberFormatter(cardNumber).split(' ')[3];

   let src;
   let alt;

   if (masterCardRegExp.test(cardNumberWithoutWhiteSpaces)) {
      src = 'https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png';
      alt = 'MASTER CARD';
   } else if (mirCardRegExp.test(cardNumberWithoutWhiteSpaces)) {
      src = 'https://evgenykatyshev.ru/projects/mir-logo/mir-logo-h14px.svg';
      alt = 'MIR';
   } else if (visaCardRegExp.test(cardNumberWithoutWhiteSpaces)) {
      src = 'https://cdn.worldvectorlogo.com/logos/visa-10.svg';
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
