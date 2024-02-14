import { useCallback } from 'react';
import { userActions } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

export const useDeleteCard = (id: number) => {
   const { deleteCard } = userActions;
   const dispatch = useAppDispatch();

   const removeCard = useCallback(() => {
      dispatch(deleteCard(id));
   }, [id, deleteCard, dispatch]);

   return removeCard;
};
