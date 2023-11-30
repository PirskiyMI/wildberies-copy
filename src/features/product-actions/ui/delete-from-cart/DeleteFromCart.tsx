import { FC } from 'react';
import { useAppDispatch } from '../../../../shared/lib';
import { deleteProduct } from '../../../../entities/basket';
import { DeleteButton } from '../../../../shared/ui';

type DeleteFromCartProps = {
   id: number;
};

export const DeleteFromCart: FC<DeleteFromCartProps> = ({ id }) => {
   const dispatch = useAppDispatch();

   const deleteHandler = () => {
      dispatch(deleteProduct(id));
   };

   return <DeleteButton clickHandler={deleteHandler} />;
};
