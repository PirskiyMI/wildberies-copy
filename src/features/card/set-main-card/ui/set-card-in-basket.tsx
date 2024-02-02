import { FC } from 'react';

import { UserPaymentCardBasket } from 'src/entities/user';
import { useSetCard } from '../hooks';

type Props = {
   cardNumber: string;
   id: number;
};

export const SetCardInBasket: FC<Props> = ({ cardNumber, id }) => {
   const { setCard } = useSetCard(id);

   return (
      <div onClick={setCard}>
         <UserPaymentCardBasket cardNumber={cardNumber} numberVisible />
      </div>
   );
};
