import { FC } from 'react';

import { useSetCard } from '../hooks';
import { UserPaymentCardContainer } from 'src/entities/user';

type Props = {
   cardNumber: string;
   id: number;
};

export const SetCardInBasket: FC<Props> = ({ cardNumber, id }) => {
   const { setCard } = useSetCard(id);

   return (
      <div onClick={setCard}>
         <UserPaymentCardContainer cardNumber={cardNumber} UIType="short" numberVisible />
      </div>
   );
};
