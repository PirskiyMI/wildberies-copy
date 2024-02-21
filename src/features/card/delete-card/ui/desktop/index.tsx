import { FC, memo, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { userActions } from 'src/entities/user';

import { IDeleteCardContainerProps } from '../../types/delete-card-container';
import { DeleteCard } from './ui';

export const DeleteCardContainer: FC<IDeleteCardContainerProps> = memo(({ cardId }) => {
   const { deleteCard } = userActions;
   const dispatch = useAppDispatch();

   const removeCard = useCallback(() => {
      dispatch(deleteCard(cardId));
   }, [cardId, deleteCard, dispatch]);

   return <DeleteCard deleteCard={removeCard} />;
});
