import { useState } from 'react';
import {
   CardImages,
   CardNames,
   cardNumberFormatter,
   masterCardExpression,
   visaExpression,
} from 'src/shared';

export const useCardInfo = (cardNumber: string) => {
   console.log(cardNumber);
   const maskedCardNumber = '⋅⋅ ' + cardNumberFormatter(cardNumber).split(' ')[3];
   console.log(1);
   const formattedCardNumber = cardNumber.split(' ').join('');

   const [cardInfo, setCardInfo] = useState<{ number: string; img: { src: string; alt: string } }>({
      number: maskedCardNumber,
      img: { src: CardImages.MirCard, alt: CardNames.MirCard },
   });

   if (masterCardExpression.test(formattedCardNumber)) {
      setCardInfo((prev) => ({
         ...prev,
         img: { src: CardImages.MasterCard, alt: CardNames.MasterCard },
      }));
   } else if (visaExpression.test(formattedCardNumber)) {
      setCardInfo((prev) => ({
         ...prev,
         img: { src: CardImages.VisaCard, alt: CardNames.VisaCard },
      }));
   }

   return cardInfo;
};
