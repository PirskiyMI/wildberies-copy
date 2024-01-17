import { FC } from 'react';

import styles from './styles.module.scss';

export const UserPaymentMethods: FC = () => {
   return (
      <div className={styles.payment}>
         <h2 className={styles.payment__title}>Способы оплаты</h2>
         <span className={styles.payment__label}>Добавить карту</span>
      </div>
   );
};
