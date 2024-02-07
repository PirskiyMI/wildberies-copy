import { useCallback } from 'react';
import { userActions } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

export const useSetCard = (cardId: number) => {
   const { setMainCard } = userActions;
   const dispatch = useAppDispatch();

   const setCard = useCallback(() => {
      dispatch(setMainCard(cardId));
   }, [cardId, setMainCard, dispatch]);

   return { setCard };
};
