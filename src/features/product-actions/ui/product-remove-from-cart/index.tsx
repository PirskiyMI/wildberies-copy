import { FC } from 'react';

import { DeleteButton, useAppDispatch } from 'src/shared';

import { deleteProduct } from '../..';

type Props = {
   id: number;
};

export const ProductRemoveFromCart: FC<Props> = ({ id }) => {
   const dispatch = useAppDispatch();

   const deleteHandler = () => {
      dispatch(deleteProduct(id));
   };

   return <DeleteButton clickHandler={deleteHandler} />;
};
