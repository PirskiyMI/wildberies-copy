import { FC } from 'react';

import { DeleteButton, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket';

type Props = {
   id: number;
};

export const RemoveProductFromCart: FC<Props> = ({ id }) => {
   const { removeProductFromBasket } = basketActions;
   const dispatch = useAppDispatch();

   const deleteHandler = () => {
      dispatch(removeProductFromBasket(id));
   };

   return <DeleteButton clickHandler={deleteHandler} />;
};
