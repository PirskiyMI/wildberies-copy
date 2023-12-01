import { FC } from 'react';
import { useAppDispatch } from '../../../../shared/lib';
import { DeleteButton } from '../../../../shared/ui';
import { deleteProduct } from '../../model/slices/basketListSlice';

type Props = {
   id: number;
};

export const DeleteFromCart: FC<Props> = ({ id }) => {
   const dispatch = useAppDispatch();

   const deleteHandler = () => {
      dispatch(deleteProduct(id));
   };

   return <DeleteButton clickHandler={deleteHandler} />;
};
