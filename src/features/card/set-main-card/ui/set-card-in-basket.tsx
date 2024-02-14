import { FC } from 'react';

import { UserPaymentCardContainer } from 'src/entities/user';

import { useSetCard } from '../lib/hooks';
import { ISetCardProps } from '../lib/types';

export const SetCardInBasket: FC<ISetCardProps> = ({ cardNumber, id }) => {
   const setCard = useSetCard(id);

   return (
      <div onClick={setCard}>
         <UserPaymentCardContainer cardNumber={cardNumber!} UIType="short" numberVisible />
      </div>
   );
};
