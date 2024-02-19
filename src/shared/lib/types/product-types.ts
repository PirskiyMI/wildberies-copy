interface IProductRating {
   rate: number;
   count: number | string;
}
interface IProductStatus {
   count: number;
   isChecked: boolean;
}
interface IProductInfo {
   description: string;
   category: string;
}
export interface IProduct {
   id: number;
   title: string;
   price: number | string;
   image: string;
   description: string;
   rating: IProductRating;
   status?: IProductStatus;
   info?: IProductInfo;
}
