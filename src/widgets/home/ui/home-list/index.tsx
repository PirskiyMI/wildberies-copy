import { FC } from 'react';

import { IProductWithRating } from 'src/shared';
import { ProductCard, ProductList } from 'src/entities/product';
import { SearchIsEmpty } from 'src/entities/search-is-empty';
import { AddProductToCart, ProductQuickView, ToggleProductToFavorite } from 'src/features/product';

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
                     addToFavoriteButton={<ToggleProductToFavorite product={el} />}>
                     <ProductQuickView product={el} />
                     <AddProductToCart
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
               addToFavoriteButton={<ToggleProductToFavorite product={el} />}>
               <ProductQuickView product={el} />
               <AddProductToCart
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
