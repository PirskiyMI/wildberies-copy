import { FC } from 'react';
import { Slider, Title } from '../../../../shared/ui';
import { useAppSelector } from '../../../../shared/lib';
import { ProductCard } from '../../../../entities/product';
import { QuickView } from '../../../../features/quick-view';
import { AddToCart } from '../../../../features/add-to-cart';

export const CartSlider: FC = () => {
   const { list } = useAppSelector((state) => state.productVisitedListSlice);

   if (!list.length) return null;

   return (
      <div style={{width: 'calc(100% + 32px)'}}>
         <Title>Вы недавно смотрели</Title>
         <Slider showElements={6} gap={0}>
            {list.map((el) => (
               <ProductCard key={el.id} product={el}>
                  <QuickView product={el} />
                  <AddToCart
                     product={{
                        id: el.id,
                        image: el.image,
                        price: el.price,
                        title: el.title,
                     }}
                  />
               </ProductCard>
            ))}
         </Slider>
      </div>
   );
};
