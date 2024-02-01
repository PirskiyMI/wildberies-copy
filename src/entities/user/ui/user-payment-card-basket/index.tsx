import { FC } from 'react';

import styles from './styles.module.scss';
import { useCardInfo } from '../../hooks';

type Props = {
   cardNumber: string;
   numberVisible?: boolean;
};

export const UserPaymentCardBasket: FC<Props> = ({ cardNumber, numberVisible }) => {
   const { number, img } = useCardInfo(cardNumber);

   return (
      <div className={styles.card}>
         <div className={styles.card__image}>
            <img src={img.src} alt={img.alt} />
         </div>
         <div className={styles.card__text}>
            <span>{img.alt} </span>
            {numberVisible ? <span>{number}</span> : null}
         </div>
      </div>
   );
};
