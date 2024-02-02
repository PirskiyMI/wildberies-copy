import { FormEvent } from 'react';
import { userActions } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

interface IProps {
   cardInfo: { number: string; date: string; code: string };
   closePopUp: () => void;
}

export const useCreateCard = ({ cardInfo: { code, date, number }, closePopUp }: IProps) => {
   const { addCard } = userActions;
   const dispatch = useAppDispatch();

   const createCard = (e: FormEvent<HTMLFormElement>) => {
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
   };

   return { createCard };
};
