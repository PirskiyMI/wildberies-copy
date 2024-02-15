import { FC } from 'react';

import { UserPaymentCardShort } from 'src/entities/user';

import { useSetCard } from '../lib/hooks';
import { ISetCardProps } from '../lib/types';

export const SetCardInBasket: FC<ISetCardProps> = ({ cardNumber, id }) => {
   const setCard = useSetCard(id);

   return (
      <div onClick={setCard}>
         <UserPaymentCardShort cardNumber={cardNumber!} numberVisible />
      </div>
   );
};
