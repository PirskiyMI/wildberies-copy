import { FC, memo } from 'react';
import { ProductCard, ProductCardDetails } from 'src/entities/product';

import {
   AddProductToCart,
   AddProductToCartInModal,
} from 'src/features/product/add-product-to-cart/ui';
import { RemoveProductFromFavorites } from 'src/features/product/remove-product-from-favorite';
import { ToggleProductToFavorite } from 'src/features/product/toggle-product-to-favorite';

import { IProduct, PopUp, usePopUp } from 'src/shared';

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
            FavoriteButton={
               isFavoriteList ? (
                  <RemoveProductFromFavorites product={product} />
               ) : (
                  <ToggleProductToFavorite product={product} />
               )
            }
            CartButton={<AddProductToCart product={product} />}
            openPopup={openPopUp}
         />
         {isPopUpOpen && (
            <PopUp closePopUp={closePopUp}>
               <ProductCardDetails
                  product={product}
                  AddToCartButton={<AddProductToCartInModal product={product} />}
                  closePopup={closePopUp}
               />
            </PopUp>
         )}
      </>
   );
});
