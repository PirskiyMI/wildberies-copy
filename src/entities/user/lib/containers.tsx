import { FC, ReactNode, memo, useMemo } from 'react';

import {
   CardImages,
   CardNames,
   cardNumberFormatter,
   masterCardExpression,
   visaExpression,
} from 'src/shared';
import { UserPaymentCard, UserPaymentCardShort } from '..';

export interface IUserPaymentCardContainer {
   cardNumber: string;
   UIType: 'full' | 'short';
   deleteButton?: ReactNode;
   switchMainCardButton?: ReactNode;
   isDesktop?: boolean;
   className?: string;
   numberVisible?: boolean;
}

export const UserPaymentCardContainer: FC<IUserPaymentCardContainer> = memo(
   ({ cardNumber, UIType, ...props }) => {
      const maskedCardNumber = '⋅⋅ ' + cardNumberFormatter(cardNumber).split(' ')[3];
      const formattedCardNumber = cardNumber.split(' ').join('');

      let cardInfo = useMemo(
         () => ({
            number: maskedCardNumber,
            img: { src: CardImages.MirCard, alt: CardNames.MirCard },
         }),
         [maskedCardNumber],
      );

      if (masterCardExpression.test(formattedCardNumber)) {
         cardInfo = {
            ...cardInfo,
            img: { src: CardImages.MasterCard, alt: CardNames.MasterCard },
         };
      } else if (visaExpression.test(formattedCardNumber)) {
         cardInfo = {
            ...cardInfo,
            img: { src: CardImages.VisaCard, alt: CardNames.VisaCard },
         };
      }

      return (
         <>
            {UIType === 'full' ? (
               <UserPaymentCard card={cardInfo} {...props} />
            ) : (
               <UserPaymentCardShort card={cardInfo} {...props} />
            )}
         </>
      );
   },
);
