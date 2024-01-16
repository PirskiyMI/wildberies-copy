import { FC } from 'react';

import { IProductWithRating } from 'src/shared';
import { ProductCard, ProductList } from 'src/entities/product';
import { ProductAddToCart, ProductQuickView } from 'src/features/product-actions';

type Props = {
   productList: IProductWithRating[];
};

export const CatalogList: FC<Props> = ({ productList }) => {
   return (
      <ProductList>
         {productList.map((el) => (
            <ProductCard key={el.id} product={el}>
               <ProductQuickView product={el} />
               <ProductAddToCart
                  product={{
                     id: el.id,
                     image: el.image,
                     price: el.price,
                     title: el.title,
                     isFavorite: el.isFavorite,
                  }}
               />
            </ProductCard>
         ))}
      </ProductList>
   );
};
