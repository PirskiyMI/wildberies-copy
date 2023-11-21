import styles from './Payment.module.scss';

import { FC } from 'react';

import PaymentInformation from './PaymentInformation';

const PaymentBody: FC = () => {
   return (
      <div className={styles.body}>
         <PaymentInformation />
         <p className={styles.body__text}>Спишем оплату с карты при получении</p>
      </div>
   );
};

export default PaymentBody;
