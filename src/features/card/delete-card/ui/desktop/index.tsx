import { FC } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';
import { IDeleteCardProps } from '../../lib/types';
import { useDeleteCard } from '../../lib/hooks';

export const DeleteCard: FC<IDeleteCardProps> = ({ id }) => {
   const deleteCard = useDeleteCard(id);

   return (
      <button onClick={deleteCard} className={styles.button}>
         <Icon className={styles.button__icon} icon="cross" />
      </button>
   );
};
