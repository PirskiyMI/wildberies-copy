import { FC, ReactNode } from 'react';

import { useAppSelector, useExpression } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   number: string;
   deleteButton: ReactNode;
   toggleMain?: ReactNode;
};

export const PaymentMethod: FC<Props> = ({ number, deleteButton, toggleMain }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { cardRegExps } = useExpression();
   const { masterCardRegExp, mirCardRegExp, visaCardRegExp } = cardRegExps;
   const maskedNumber = number
      .split(' ')
      .map((el, index) => (index !== 3 ? '⋅⋅⋅⋅' : el))
      .join(' ');
   const numberWithoutWhiteSpaces = number.split(' ').join('');

   let src;
   let alt;

   if (masterCardRegExp.test(numberWithoutWhiteSpaces)) {
      src = 'https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png';
      alt = 'Master card';
   } else if (mirCardRegExp.test(numberWithoutWhiteSpaces)) {
      src = 'https://evgenykatyshev.ru/projects/mir-logo/mir-logo-h14px.svg';
      alt = 'Mir';
   } else if (visaCardRegExp.test(numberWithoutWhiteSpaces)) {
      src = 'https://cdn.worldvectorlogo.com/logos/visa-10.svg';
      alt = 'Visa';
   }

   if (windowWidth >= 1024) {
      return (
         <article className={styles.method}>
            <div className={styles.method__buttons}>
               {toggleMain && <div className={styles.button__toggle}>{toggleMain}</div>}
               <div className={styles.button__delete}>{deleteButton}</div>
            </div>
            <div className={styles.method__info}>
               <div className={styles.method__image}>
                  <img src={src} alt={alt} />
               </div>
               <div className={styles.method__text}>{maskedNumber}</div>
            </div>
         </article>
      );
   }

   return (
      <article className={styles.method}>
         <div className={styles.method__info}>
            <div className={styles.method__image}>
               <img src={src} alt={alt} />
            </div>
            <div className={styles.method__text}>{maskedNumber}</div>
         </div>
         <div className={styles.button__delete}>{deleteButton}</div>
      </article>
   );
};
