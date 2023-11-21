import styles from './Payment.module.scss';

import { FC } from 'react';

const PaymentInformation: FC = () => {
   return (
      <div className={styles.information}>
         <div className={styles.information__data}>
            <span className={styles.information__number}>1234 56•• •••• 1234</span>
            <span className={styles.information__date}>01/30</span>
         </div>
      </div>
   );
};

export default PaymentInformation;
