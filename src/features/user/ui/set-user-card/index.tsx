import { FC } from 'react';

import { useAppDispatch } from 'src/shared';

import styles from './styles.module.scss';
import { setMainCard } from 'src/entities/user';

type Props = {
   id: number;
};

export const SetUserMainCard: FC<Props> = ({ id }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(setMainCard(id));
   };

   return (
      <button className={styles.button} onClick={clickHandler}>
         Сделать основным
      </button>
   );
};
