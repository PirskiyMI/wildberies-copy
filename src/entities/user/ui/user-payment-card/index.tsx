import { FC, ReactNode } from 'react';

import { Card } from 'src/shared';

import styles from './styles.module.scss';
import { useCardInfo } from '../../hooks';

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
   const {
      number,
      img: { alt, src },
   } = useCardInfo(cardNumber);

   let classes = className ? `${className} ${styles.card} ` : styles.card;
   classes = !toggleMain ? `${classes} ${styles.card_main}` : classes;

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
                  <span>{number}</span>
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
                  <span>{number}</span>
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
