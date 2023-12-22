import { FC } from 'react';
import { useAppSelector } from '../../../../shared/lib';
import { ProductCard, ProductList } from '../../../../entities/product';
import { AddToCart, QuickView, RemoveFromFavorite } from '../../../../features/product-actions';

export const UserFavoritesList: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);

   const productsList = favorites.products;

   return (
      <ProductList>
         {productsList.map((el) => (
            <ProductCard
               key={el.id}
               product={el}
               addToFavoriteButton={<RemoveFromFavorite id={el.id} />}>
               <QuickView product={el} />
               <AddToCart
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
