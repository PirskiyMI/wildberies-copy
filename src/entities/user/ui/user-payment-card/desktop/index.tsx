import { FC, memo } from 'react';

import { Card } from 'src/shared';

import styles from './styles.module.scss';
import { IUserPaymentCard } from '../../../lib/types/user-payment-card';
import { usePaymentInfo } from '../../../lib/hooks';

export const UserPaymentCard: FC<IUserPaymentCard> = memo(
   ({ cardNumber, deleteButton, switchMainCardButton, className }) => {
      let classes = className ? `${className} ${styles.card} ` : styles.card;
      classes = !switchMainCardButton ? `${classes} ${styles.card_main}` : classes;

      const {
         number,
         img: { src, alt },
      } = usePaymentInfo(cardNumber);

      return (
         <Card className={classes}>
            <div className={styles.card__buttons}>
               {switchMainCardButton ? (
                  <div className={styles.card__toggle}>{switchMainCardButton}</div>
               ) : (
                  <p className={styles.card__label}>Основной способ</p>
               )}
               <div className={styles.card__delete}>{deleteButton}</div>
            </div>
            <div className={styles.card__info}>
               <div className={styles.card__text}>
                  <span>{alt} </span>
                  <span>{number}</span>
               </div>
               <div className={styles.card__image}>
                  <img src={src} alt={alt} />
               </div>
            </div>
         </Card>
      );
   },
);
