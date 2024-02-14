import { IProduct } from 'src/shared';

export interface IAddProductToCartProps {
   inBasket: boolean;
   clickHandler: () => void;
}

export interface IAddProductToCartContainerProps {
   product: IProduct;
   inBasket: boolean;
   UIType: 'pop-up' | 'main';
}
