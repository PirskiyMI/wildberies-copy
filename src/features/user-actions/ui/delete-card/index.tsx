import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import { deleteCard } from '../../../../entities/user';

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
