import { FC } from 'react';
import { Modal } from '../../shared/ui';
import { useAppSelector } from '../../shared/lib';
import { ProductModal as ProductModalBody } from '../../entities/product';
import { ProductQuickViewAddToCart } from '../../features/product-actions';

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
