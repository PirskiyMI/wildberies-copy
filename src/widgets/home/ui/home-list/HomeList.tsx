import { FC } from 'react';

import { IProductWithRating } from '../../../../shared/lib';
import { ProductCard, ProductList } from '../../../../entities/product';
import { SearchIsEmpty } from '../../../../entities/search-is-empty';
import {
   ProductAddToCart,
   ProductQuickView,
   ProductToggleToFavorite,
} from '../../../../features/product-actions';

type Props = {
   search?: string;
   productList: IProductWithRating[];
};

export const HomeList: FC<Props> = ({ productList, search }) => {
   if (!productList.length && search) {
      return (
         <>
            <SearchIsEmpty search={search} />
            <ProductList>
               {productList.map((el) => (
                  <ProductCard
                     key={el.id}
                     product={el}
                     addToFavoriteButton={<ProductToggleToFavorite product={el} />}>
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
         </>
      );
   }

   return (
      <ProductList>
         {productList.map((el) => (
            <ProductCard
               key={el.id}
               product={el}
               addToFavoriteButton={<ProductToggleToFavorite product={el} />}>
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
