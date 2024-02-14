import { IProduct } from 'src/shared';

export interface IRemoveProductFromFavoriteContainerProps {
   product: IProduct;
}

export interface IRemoveProductFromFavoriteProps {
   clickHandler: () => void;
}
