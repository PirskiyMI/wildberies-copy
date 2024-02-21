import { FC, useCallback } from 'react';

import { userActions } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

import { ISetCardContainerProps } from '../../types/set-card-container';
import { SetCardInBasket } from './ui';

export const SetCardInBasketContainer: FC<ISetCardContainerProps> = ({ cardId, ...props }) => {
   const { setMainCard } = userActions;
   const dispatch = useAppDispatch();

   const setCard = useCallback(() => {
      dispatch(setMainCard(cardId));
   }, [cardId, setMainCard, dispatch]);

   return <SetCardInBasket setCard={setCard} {...props} />;
};
