import { FC } from 'react';
import styles from './styles.module.scss';

import { PaymentInformation } from '../payment-information';

export const PaymentBody: FC = () => {
   return (
      <div className={styles.body}>
         <PaymentInformation />
         <p className={styles.body__text}>Спишем оплату с карты при получении</p>
      </div>
   );
};
