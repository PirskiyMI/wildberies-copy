import { FC } from 'react';

import { IProduct, priceFormatter } from 'src/shared';

import { IProductCard } from '../types';
import { ProductCardDetailsUI } from '../ui';

export const ProductCardDetails: FC<IProductCard> = ({
   product: { price, ...product },
   ...props
}) => {
   const formattedPrice = priceFormatter(price);

   const formattedProduct: IProduct = { price: formattedPrice, ...product };

   return <ProductCardDetailsUI product={formattedProduct} {...props} />;
};
