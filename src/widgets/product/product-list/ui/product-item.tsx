import { FC, memo, useState } from 'react';
import { ProductCard, ProductCardDetails } from 'src/entities/product';

import {
   AddProductToCart,
   AddProductToCartInModal,
   RemoveProductFromFavorites,
   ToggleProductToFavorite,
} from 'src/features/product';

import { IProduct, Popup } from 'src/shared';

interface IProps {
   product: IProduct;
   isFavoriteList?: boolean;
}

export const ProductItem: FC<IProps> = memo(({ product, isFavoriteList = false }) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const openPopup = () => setIsPopupOpen(true);
   const closePopup = () => setIsPopupOpen(false);

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
            openPopup={openPopup}
         />
         {isPopupOpen && (
            <Popup closeModal={closePopup}>
               <ProductCardDetails
                  product={product}
                  AddToCartButton={<AddProductToCartInModal product={product} />}
                  closePopup={closePopup}
               />
            </Popup>
         )}
      </>
   );
});
