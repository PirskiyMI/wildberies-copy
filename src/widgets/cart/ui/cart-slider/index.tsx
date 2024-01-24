import { FC } from 'react';

import { Slider, useAppSelector } from 'src/shared';
import { ProductCard } from 'src/entities/product';
import { AddProductToCart, ProductQuickView } from 'src/features/product';

import styles from './styles.module.scss';

export const CartSlider: FC = () => {
   const { list } = useAppSelector((state) => state.visitedProductsListReducer);

   if (!list.length) return null;

   return (
      <div style={{}} className={styles.slider}>
         <h2>Вы недавно смотрели</h2>
         <Slider minHeight={370} gap={30}>
            {list.map((el) => (
               <ProductCard key={el.id} product={el}>
                  <ProductQuickView product={el} />
                  <AddProductToCart
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
