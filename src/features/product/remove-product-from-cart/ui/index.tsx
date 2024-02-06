import { FC } from 'react';

import { DeleteButton, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

import styles from './styles.module.scss';

type Props = {
   id: number;
};

export const RemoveProductFromCart: FC<Props> = ({ id }) => {
   const { removeProductFromBasket } = basketActions;
   const dispatch = useAppDispatch();

   const removeHandler = () => {
      dispatch(removeProductFromBasket(id));
   };

   return <DeleteButton clickHandler={removeHandler} className={styles.button} />;
};
