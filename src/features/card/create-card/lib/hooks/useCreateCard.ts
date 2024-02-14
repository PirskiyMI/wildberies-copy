import { FormEvent, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { userActions } from 'src/entities/user';

import { IUseCreateCardArgs } from '../types';

export const useCreateCard = ({
   cardInfo: { code, date, number },
   closePopUp,
}: IUseCreateCardArgs) => {
   const { addCard } = userActions;
   const dispatch = useAppDispatch();

   const createCard = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         dispatch(
            addCard({
               id: Date.now(),
               cardNumber: number,
               date: date,
               code: code,
               isMain: false,
            }),
         );
         closePopUp();
      },
      [addCard, number, code, date, closePopUp, dispatch],
   );

   return createCard;
};
