import { FC } from 'react';

import { IProduct, priceFormatter } from 'src/shared';

import { IProductCard } from '../types';
import { ProductCardUI } from '../ui';

export const ProductCard: FC<IProductCard> = ({
   product: { id, rating, price, ...product },
   ...props
}) => {
   const { count } = rating;

   const formattedPrice = priceFormatter(price);
   const formattedCount = priceFormatter(count);

   const formattedProduct: IProduct = {
      id,
      price: formattedPrice,
      rating: { ...rating, count: formattedCount },
      ...product,
   };

   return <ProductCardUI product={formattedProduct} {...props} />;
};
