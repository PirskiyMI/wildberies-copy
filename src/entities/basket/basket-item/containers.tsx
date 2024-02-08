import { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'src/shared';

import { BasketItemUI } from './ui/ui';
import { IBasketItem } from './types';

export const BasketItem: FC<IBasketItem> = ({
   product: { price, status, ...product },
   features,
}) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const isDesktop = windowWidth >= 1024;
   const [productPrice, setProductPrice] = useState(price);
   const { count } = status!;

   useEffect(() => {
      setProductPrice(price * count);
   }, [count, price]);

   return (
      <BasketItemUI
         product={{ price: productPrice, status, ...product }}
         features={features}
         isDesktop={isDesktop}
      />
   );
};
