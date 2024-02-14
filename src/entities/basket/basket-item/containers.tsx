import { FC, useEffect, useState } from 'react';
import { useAppSelector, windowWidthSelector } from 'src/shared';

import { IBasketItem } from './types';
import { DesktopBasketItem, MobileBasketItem } from './ui';

export const BasketItem: FC<IBasketItem> = ({
   product: { price, status, ...product },
   features,
}) => {
   const windowWidth = useAppSelector(windowWidthSelector);
   const [productPrice, setProductPrice] = useState(price);
   const { count } = status!;

   useEffect(() => {
      setProductPrice(+price * count);
   }, [count, price]);

   if (!windowWidth) {
      return null;
   }

   return (
      <>
         {windowWidth >= 1024 ? (
            <DesktopBasketItem
               features={{ ...features }}
               product={{ status, ...product, price: productPrice }}
            />
         ) : (
            <MobileBasketItem
               features={{ ...features }}
               product={{ status, ...product, price: productPrice }}
            />
         )}
      </>
   );
};
