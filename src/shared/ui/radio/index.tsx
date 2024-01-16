import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
   isActive: boolean;
};

export const Radio: FC<Props> = ({ isActive }) => {
   return (
      <div className={styles.radio}>{isActive && <div className={styles.radio__circle}></div>}</div>
   );
};
