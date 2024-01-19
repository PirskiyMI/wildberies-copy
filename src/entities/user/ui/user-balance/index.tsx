import { FC } from 'react';

import styles from './styles.module.scss';
import { useAppSelector } from 'src/shared';

type Props = {
   className?: string;
};

export const UserBalance: FC<Props> = ({ className }) => {
   const { balance } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.balance}` : styles.balance;

   return (
      <div className={classes}>
         <span className={styles.balance__icon}>Б</span>
         <span className={styles.balance__value}>{balance} сом</span>
      </div>
   );
};
