import { FC } from 'react';

import { Icon } from 'src/shared';

import { IDeleteCardProps } from '../../types/delete-card';
import styles from './styles.module.scss';

export const DeleteCard: FC<IDeleteCardProps> = ({ deleteCard }) => {
   return (
      <button onClick={deleteCard} className={styles.button}>
         <Icon className={styles.button__icon} icon="cross" />
      </button>
   );
};
