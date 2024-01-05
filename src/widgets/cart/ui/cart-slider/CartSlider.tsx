import { FC } from 'react';

import styles from './styles.module.scss';

import { Slider } from '../../../../shared/ui';
import { useAppSelector } from '../../../../shared/lib';
import { ProductCard } from '../../../../entities/product';
import { ProductAddToCart, ProductQuickView } from '../../../../features/product-actions';

export const CartSlider: FC = () => {
   const { list } = useAppSelector((state) => state.cartSliderReducer);

   if (!list.length) return null;

   return (
      <div style={{}} className={styles.slider}>
         <h2>Вы недавно смотрели</h2>
         <Slider minHeight={370} gap={30}>
            {list.map((el) => (
               <ProductCard key={el.id} product={el}>
                  <ProductQuickView product={el} />
                  <ProductAddToCart
                     product={{
                        id: el.id,
                        image: el.image,
                        price: el.price,
                        title: el.title,
                        isFavorite: el.isFavorite,
                     }}
                  />
               </ProductCard>
            ))}
         </Slider>
      </div>
   );
};
