import { ReactNode } from 'react';
import { IProduct } from 'src/shared';

export interface IProductCard {
   product: IProduct;
   favoriteButton: ReactNode;
   cartButton: ReactNode;
   popupHandler: () => void;
}
