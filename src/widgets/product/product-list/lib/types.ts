import { IProduct } from 'src/shared';

export interface IListIsEmptyProps {
   searchValue: string;
}
export interface IProductListProps {
   products: IProduct[];
   isFavoriteList: boolean;
}
export interface IProductItemProps {
   product: IProduct;
   isFavoriteList?: boolean;
}
