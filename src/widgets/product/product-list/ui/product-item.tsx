import { FC, lazy, memo } from 'react';
import { ProductCard } from 'src/entities/product';

const ProductCardDetails = lazy(async () => {
   const { ProductCardDetails } = await import(
      'src/entities/product/containers/product-card-details'
   );
   return { default: ProductCardDetails };
});
const PopUp = lazy(async () => {
   const { PopUp } = await import('src/shared/ui/pop-up');
   return { default: PopUp };
});
const RemoveProductFromFavorites = lazy(async () => {
   const { RemoveProductFromFavorites } = await import(
      'src/features/product/remove-product-from-favorite'
   );
   return { default: RemoveProductFromFavorites };
});
const ToggleProductToFavorite = lazy(async () => {
   const { ToggleProductToFavorite } = await import(
      'src/features/product/toggle-product-to-favorite'
   );
   return { default: ToggleProductToFavorite };
});

import { inBasketSelector } from 'src/entities/basket/basket-item';
import {
   AddProductToCart,
   AddProductToCartInModal,
} from 'src/features/product/add-product-to-cart/ui';

import { useAppSelector, usePopUp } from 'src/shared';
import { IProductItemProps } from '../lib/types';

export const ProductItem: FC<IProductItemProps> = memo(({ product, isFavoriteList = false }) => {
   const inBasket = useAppSelector((state) => inBasketSelector(state, product.id));
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   return (
      <>
         <ProductCard
            product={product}
            favoriteButton={
               isFavoriteList ? (
                  <RemoveProductFromFavorites product={product} />
               ) : (
                  <ToggleProductToFavorite product={product} />
               )
            }
            cartButton={<AddProductToCart product={product} inBasket={inBasket} />}
            popupHandler={openPopUp}
         />
         {isPopUpOpen && (
            <PopUp closePopUp={closePopUp}>
               <ProductCardDetails
                  product={product}
                  cartButton={<AddProductToCartInModal product={product} inBasket={inBasket} />}
                  popupHandler={closePopUp}
                  favoriteButton={<span />}
               />
            </PopUp>
         )}
      </>
   );
});
