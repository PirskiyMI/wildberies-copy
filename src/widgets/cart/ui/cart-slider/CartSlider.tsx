import { FC } from 'react';
import { Slider, Title } from '../../../../shared/ui';
import { useAppSelector } from '../../../../shared/lib';
import { ProductCard } from '../../../../entities/product';
import { AddToCart, QuickView } from '../../../../features/product-actions';

export const CartSlider: FC = () => {
   const { list } = useAppSelector((state) => state.cartSliderReducer);

   if (!list.length) return null;

   return (
      <div style={{ width: 'calc(100% + 32px)' }}>
         <Title>Вы недавно смотрели</Title>
         <Slider minHeight={370} gap={30}>
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
