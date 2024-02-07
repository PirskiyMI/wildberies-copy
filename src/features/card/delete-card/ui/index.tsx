import { FC, useCallback } from 'react';

import { Icon, useAppDispatch } from 'src/shared';
import { userActions } from 'src/entities/user';

import styles from './styles.module.scss';

type Props = {
   id: number;
};

export const DeleteCard: FC<Props> = ({ id }) => {
   const { deleteCard } = userActions;
   const dispatch = useAppDispatch();

   const removeCard = useCallback(() => {
      dispatch(deleteCard(id));
   }, [id, deleteCard, dispatch]);

   return (
      <button onClick={removeCard} className={styles.button}>
         <Icon className={styles.button__icon} icon="cross" />
      </button>
   );
};
