import { FC } from 'react';
import { useAppDispatch } from '../../../../shared/lib';
import { deleteProduct } from '../../../../entities/basket';
import { DeleteButton } from '../../../../shared/ui';

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
