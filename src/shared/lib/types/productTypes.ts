interface IProductRating {
   rate: number;
   count: number;
}
interface IProductStatus {
   count: number;
   isChecked: boolean;
}

export interface IProduct {
   id: number;
   title: string;
   price: number;
   image: string;
}
export interface IProductWithDescription extends IProduct {
   description: string;
   category: string;
}
export interface IProductWithRating extends IProductWithDescription {
   rating: IProductRating;
}
export interface IProductWithStatus extends IProduct {
   status: IProductStatus;
}