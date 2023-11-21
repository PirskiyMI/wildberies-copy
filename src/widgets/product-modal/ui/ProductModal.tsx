import { FC } from 'react';
import { Modal } from '../../../shared/ui';
import { useAppSelector } from '../../../shared/lib';
import { ProductQuickView } from '../../../entities/product';
import { QuickViewAddToCart } from '../../../features/add-to-cart';

export const ProductModal: FC = () => {
   const { product } = useAppSelector((state) => state.modalReducer);
   const { list } = useAppSelector((state) => state.basketListReducer);
   const inBasket = Boolean(list.find((el) => el.id === product?.id));

   if (product) {
      return (
         <Modal>
            <ProductQuickView
               product={product}
               Button={
                  <QuickViewAddToCart inBasket={inBasket} product={product} />
               }></ProductQuickView>
         </Modal>
      );
   }
};
