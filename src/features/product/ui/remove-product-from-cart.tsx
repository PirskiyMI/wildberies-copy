import { FC } from 'react';
import { basketActions } from 'src/entities/basket';

import { DeleteButton, useAppDispatch } from 'src/shared';

type Props = {
   id: number;
};

export const RemoveProductFromCart: FC<Props> = ({ id }) => {
   const { deleteProductFromBasket } = basketActions;
   const dispatch = useAppDispatch();

   const removerProduct = () => {
      dispatch(deleteProductFromBasket(id));
   };

   return <DeleteButton clickHandler={removerProduct} />;
};
