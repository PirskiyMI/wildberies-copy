import { FC } from 'react';

import styles from './styles.module.scss';
import { useSetCard } from '../../hooks';

type Props = {
   id: number;
};

export const SetCard: FC<Props> = ({ id }) => {
   const { setCard } = useSetCard(id);

   return (
      <button className={styles.button} onClick={setCard}>
         Сделать основным
      </button>
   );
};
