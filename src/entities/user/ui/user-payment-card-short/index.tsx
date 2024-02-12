import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { IUserPaymentCard } from '../../lib/types/user-payment-card';

export const UserPaymentCardShort: FC<IUserPaymentCard> = memo(
   ({
      card: {
         number,
         img: { src, alt },
      },
      numberVisible,
   }) => {

      return (
         <div className={styles.card}>
            <div className={styles.card__image}>
               <img src={src} alt={alt} />
            </div>
            <div className={styles.card__text}>
               <span>{alt} </span>
               {numberVisible ? <span>{number}</span> : null}
            </div>
         </div>
      );
   },
);
