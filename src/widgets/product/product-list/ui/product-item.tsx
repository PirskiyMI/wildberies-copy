import { FC, memo } from 'react';
import { ProductCard, ProductCardDetails } from 'src/entities/product';

import { PopUp, useAppSelector, usePopUp } from 'src/shared';
import { inBasketSelector } from 'src/entities/basket/basket-item';
import { AddProductToCart } from 'src/features/product/add-product-to-cart';
import { RemoveProductFromFavorite } from 'src/features/product/remove-product-from-favorite';

import { IProductItemProps } from '../lib/types';
import { ToggleProductToFavorite } from 'src/features/product/toggle-product-to-favorite';

export const ProductItem: FC<IProductItemProps> = memo(({ product, isFavoriteList = false }) => {
   const inBasket = useAppSelector((state) => inBasketSelector(state, product.id));
   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   return (
      <>
         <ProductCard
            product={product}
            favoriteButton={
               isFavoriteList ? (
                  <RemoveProductFromFavorite product={product} />
               ) : (
                  <ToggleProductToFavorite product={product} />
               )
            }
            cartButton={<AddProductToCart product={product} inBasket={inBasket} UIType="main" />}
            popupHandler={openPopUp}
         />
         {isPopUpOpen && (
            <PopUp closePopUp={closePopUp}>
               <ProductCardDetails
                  product={product}
                  cartButton={
                     <AddProductToCart product={product} inBasket={inBasket} UIType="pop-up" />
                  }
                  popupHandler={closePopUp}
                  favoriteButton={<span />}
               />
            </PopUp>
         )}
      </>
   );
});
