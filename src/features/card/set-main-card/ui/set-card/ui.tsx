import { FC } from 'react';

import { ISetCardProps } from '../../lib/types';
import styles from './styles.module.scss';

export const SetCard: FC<ISetCardProps> = ({ setCard }) => {
   return (
      <button className={styles.button} onClick={setCard}>
         Сделать основным
      </button>
   );
};
