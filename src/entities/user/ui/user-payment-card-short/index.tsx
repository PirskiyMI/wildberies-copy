import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { IUserPaymentCard } from '../../lib/types/user-payment-card';
import { usePaymentInfo } from '../../lib/hooks';

export const UserPaymentCardShort: FC<IUserPaymentCard> = memo(({ cardNumber, numberVisible }) => {
   const {
      number,
      img: { src, alt },
   } = usePaymentInfo(cardNumber);

   return (
      <div className={styles.card}>
         <div className={styles.card__image}>
            <img src={src} alt={alt} />
         </div>
         <div className={styles.card__text}>{numberVisible ? <span>{number}</span> : null}</div>
      </div>
   );
});
