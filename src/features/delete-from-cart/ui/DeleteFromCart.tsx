import { FC } from 'react';
import { DeleteButton } from '../../../shared/ui';
import { deleteProduct } from '../../../entities/basket/model/basketListSlice';
import { useAppDispatch } from '../../../shared/lib';

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
