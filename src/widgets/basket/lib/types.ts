import { IProduct } from 'src/shared';

export interface IBasketList {
   list: IProduct[];
}

export interface IBasket extends IBasketList {
   count: number;
   price: number;
}
