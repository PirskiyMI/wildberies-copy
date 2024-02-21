import { FC, memo, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { userActions } from 'src/entities/user';

import { ISetCardContainerProps } from '../../types/set-card-container';
import { SetCard } from './ui';

export const SetCardContainer: FC<ISetCardContainerProps> = memo(({ cardId }) => {
   const { setMainCard } = userActions;
   const dispatch = useAppDispatch();

   const setCard = useCallback(() => {
      dispatch(setMainCard(cardId));
   }, [cardId, setMainCard, dispatch]);

   return <SetCard setCard={setCard} />;
});
