import { ReactNode } from 'react';
import { IProduct } from 'src/shared';

export interface IBasketItem {
   product: IProduct;
   features: {
      Checkbox: ReactNode;
      Counter: ReactNode;
      Delete: ReactNode;
   };
}

export interface IBasketItemUI extends IBasketItem {
   isDesktop: boolean;
}
