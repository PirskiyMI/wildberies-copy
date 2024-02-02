import { userActions } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

export const useSetCard = (cardId: number) => {
   const { setMainCard } = userActions;
   const dispatch = useAppDispatch();

   const setCard = () => {
      dispatch(setMainCard(cardId));
   };

   return { setCard };
};
