import { FC } from 'react';

import { UserPaymentCardShort } from 'src/entities/user';

import { ISetCardProps } from '../../types/set-card';

export const SetCardInBasket: FC<ISetCardProps> = ({ cardNumber, setCard }) => {
   return (
      <div onClick={setCard}>
         <UserPaymentCardShort cardNumber={cardNumber!} numberVisible />
      </div>
   );
};
