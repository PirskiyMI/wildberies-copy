import { FC } from 'react';

import styles from './styles.module.scss';
import { useSetCard } from '../../lib/hooks';
import { ISetCardProps } from '../../lib/types';

export const SetCard: FC<ISetCardProps> = ({ id }) => {
   const setCard = useSetCard(id);

   return (
      <button className={styles.button} onClick={setCard}>
         Сделать основным
      </button>
   );
};
