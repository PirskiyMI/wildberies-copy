import { FC } from 'react';
import styles from './UserBalance.module.scss';

const UserBalanceTop = () => {
   return <h2 className={styles.balance__title}>Баланс</h2>;
};
const UserBalanceBottom = () => {
   return (
      <div className={styles.balance__bottom}>
         <span className={styles.balance__icon}>Б</span>
         <span className={styles.balance__label}> 0 ₽</span>
      </div>
   );
};

export const UserBalance: FC = () => {
   return (
      <div className={styles.balance}>
         <UserBalanceTop />
         <UserBalanceBottom />
      </div>
   );
};
