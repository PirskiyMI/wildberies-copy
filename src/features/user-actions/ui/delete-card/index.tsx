import { FC } from 'react';

import { Icon, useAppDispatch } from 'src/shared';
import { deleteCard } from 'src/entities/user';

import styles from './styles.module.scss';

type Props = {
   id: number;
};

export const DeleteCard: FC<Props> = ({ id }) => {
   const dispatch = useAppDispatch();
   const clickHandler = () => {
      dispatch(deleteCard(id));
   };

   return (
      <button onClick={clickHandler} className={styles.button}>
         <Icon className={styles.button__icon} icon="cross" />
      </button>
   );
};
