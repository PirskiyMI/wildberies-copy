import { FC } from 'react';
import styles from './PaymentBody.module.scss';

import { PaymentInformation } from '../payment-information/PaymentInformation';

export const PaymentBody: FC = () => {
   return (
      <div className={styles.body}>
         <PaymentInformation />
         <p className={styles.body__text}>Спишем оплату с карты при получении</p>
      </div>
   );
};
