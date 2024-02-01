import { FC, memo } from 'react';
import { ProductCard, ProductCardDetails } from 'src/entities/product';

import {
   AddProductToCart,
   AddProductToCartInModal,
   RemoveProductFromFavorites,
   ToggleProductToFavorite,
} from 'src/features/product';

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
                  <RemoveProductFromFavorites productId={product.id} />
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
