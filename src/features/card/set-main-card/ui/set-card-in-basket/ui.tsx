import { FC } from 'react';

import { UserPaymentCardShort } from 'src/entities/user';

import { ISetCardProps } from '../../lib/types';

export const SetCardInBasket: FC<ISetCardProps> = ({ cardNumber, setCard }) => {
   return (
      <div onClick={setCard}>
         <UserPaymentCardShort cardNumber={cardNumber!} numberVisible />
      </div>
   );
};
