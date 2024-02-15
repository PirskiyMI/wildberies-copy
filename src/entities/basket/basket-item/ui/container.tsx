import { FC, lazy } from 'react';
import { useAppSelector, windowWidthSelector } from 'src/shared';

import { IBasketItem } from '../types';

export const DesktopBasketItem = lazy(async () => {
   const { DesktopBasketItem } = await import('./desktop-item');
   return { default: DesktopBasketItem };
});
export const MobileBasketItem = lazy(async () => {
   const { MobileBasketItem } = await import('./modile-item');
   return { default: MobileBasketItem };
});

export const BasketItem: FC<IBasketItem> = (props) => {
   const windowWidth = useAppSelector(windowWidthSelector);

   if (!windowWidth) {
      return null;
   }

   return (
      <>
         {windowWidth >= 1024 ? <DesktopBasketItem {...props} /> : <MobileBasketItem {...props} />}
      </>
   );
};
