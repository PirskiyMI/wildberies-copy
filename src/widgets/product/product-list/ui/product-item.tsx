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

import {
   AddProductToCart,
   AddProductToCartInModal,
} from 'src/features/product/add-product-to-cart/ui';

import { IProduct, usePopUp } from 'src/shared';

interface IProps {
   product: IProduct;
   isFavoriteList?: boolean;
}

export const ProductItem: FC<IProps> = memo(({ product, isFavoriteList = false }) => {
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
            cartButton={<AddProductToCart product={product} />}
            popupHandler={openPopUp}
         />
         {isPopUpOpen && (
            <PopUp closePopUp={closePopUp}>
               <ProductCardDetails
                  product={product}
                  cartButton={<AddProductToCartInModal product={product} />}
                  popupHandler={closePopUp}
                  favoriteButton={<span />}
               />
            </PopUp>
         )}
      </>
   );
});
