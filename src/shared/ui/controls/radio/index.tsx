import { FC } from 'react';
import styles from './styles.module.scss';
import { IRadioProps } from 'src/shared/lib/types/types-ui/radio-types';


export const Radio: FC<IRadioProps> = ({ isActive }) => {
   return (
      <div className={styles.radio}>{isActive && <div className={styles.radio__dot}></div>}</div>
   );
};
