import { FC } from 'react';

import { Popup, useAppSelector } from 'src/shared';
import { ProductCardDetails } from 'src/entities/product';
import { AddProductToCartInModal } from 'src/features/product';

export const ProductDetails: FC = () => {
   const { product } = useAppSelector((state) => state.modalReducer);
   const { list } = useAppSelector((state) => state.basketListReducer);
   const inBasket = Boolean(list.find((el) => el.id === product?.id));

   if (product) {
      return (
         <Popup>
            <ProductCardDetails
               product={product}
               Button={<AddProductToCartInModal inBasket={inBasket} product={product} />}
            />
         </Popup>
      );
   }
};
