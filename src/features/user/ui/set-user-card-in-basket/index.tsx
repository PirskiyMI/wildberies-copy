import { FC } from 'react';

import { UserPaymentCardBasket, setMainCard } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

type Props = {
   cardNumber: string;
   id: number;
};

export const SetUserMainCardInBasket: FC<Props> = ({ cardNumber, id }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(setMainCard(id));
   };

   return (
      <div onClick={clickHandler}>
         <UserPaymentCardBasket cardNumber={cardNumber} numberVisible />
      </div>
   );
};
