interface IProductRating {
   rate: number;
   count: number;
}
interface IProductStatus {
   count: number;
   isChecked: boolean;
}
interface IProductInfo {
   description: string;
   category: string;
   rating: IProductRating;
}
export interface IProduct {
   id: number;
   title: string;
   price: number;
   image: string;
   isFavorite: boolean;
   status?: IProductStatus;
   info?: IProductInfo;
}
