import { useMemo } from 'react';
import {
   CardImages,
   CardNames,
   cardNumberFormatter,
   masterCardExpression,
   visaExpression,
} from 'src/shared';

export const usePaymentInfo = (cardNumber: string) => {
   const maskedCardNumber = '⋅⋅ ' + cardNumberFormatter(cardNumber).split(' ')[3];
   const formattedCardNumber = cardNumber.split(' ').join('');

   const cardInfo = useMemo(() => {
      let imgInfo;
      if (masterCardExpression.test(formattedCardNumber)) {
         imgInfo = { src: CardImages.MasterCard, alt: CardNames.MasterCard };
      } else if (visaExpression.test(formattedCardNumber)) {
         imgInfo = { src: CardImages.VisaCard, alt: CardNames.VisaCard };
      } else {
         imgInfo = { src: CardImages.MirCard, alt: CardNames.MirCard };
      }
      return { number: maskedCardNumber, img: imgInfo };
   }, [maskedCardNumber, formattedCardNumber]);

   return cardInfo;
};
