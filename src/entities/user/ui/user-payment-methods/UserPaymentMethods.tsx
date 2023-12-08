import { FC } from 'react';
import styles from './UserPaymentMethods.module.scss';

export const UserPaymentMethods: FC = () => {
   return (
      <div className={styles.payment}>
         <UserPaymentMethodsTop />
         <UserPaymentMethodsBottom />
      </div>
   );
};

const UserPaymentMethodsTop = () => {
   return <h2 className={styles.payment__title}>Способы оплаты</h2>;
};
const UserPaymentMethodsBottom = () => {
   return <span className={styles.payment__label}>Добавить карту</span>;
};
