import { FC } from 'react';

import { Modal, useAppSelector } from 'src/shared';
import { ProductModal as ProductModalBody } from 'src/entities/product';
import { ProductQuickViewAddToCart } from 'src/features/product-actions';

export const ProductModal: FC = () => {
   const { product } = useAppSelector((state) => state.modalReducer);
   const { list } = useAppSelector((state) => state.basketListReducer);
   const inBasket = Boolean(list.find((el) => el.id === product?.id));

   if (product) {
      return (
         <Modal>
            <ProductModalBody
               product={product}
               Button={<ProductQuickViewAddToCart inBasket={inBasket} product={product} />}
            />
         </Modal>
      );
   }
};
