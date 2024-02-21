import { FC } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';
import { IDeleteCardProps } from '../../types/delete-card';

export const DeleteCard: FC<IDeleteCardProps> = ({ deleteCard }) => {
   return (
      <button onClick={deleteCard} className={styles.button}>
         <Icon className={styles.button__icon} icon="cross" />
      </button>
   );
};
