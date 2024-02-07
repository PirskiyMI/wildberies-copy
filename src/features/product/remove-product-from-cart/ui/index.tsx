import { FC, memo, useCallback } from 'react';

import { DeleteButton, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

import styles from './styles.module.scss';

type Props = {
   id: number;
};

export const RemoveProductFromCart: FC<Props> = memo(({ id }) => {
   const { removeProductFromBasket } = basketActions;
   const dispatch = useAppDispatch();

   const removeHandler = useCallback(() => {
      dispatch(removeProductFromBasket(id));
   }, [dispatch, id, removeProductFromBasket]);

   return <DeleteButton clickHandler={removeHandler} className={styles.button} />;
});
