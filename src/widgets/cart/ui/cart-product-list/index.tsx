import { FC } from 'react';

import { useAppSelector, Section } from 'src/shared';
import { ProductCard, ProductList } from 'src/entities/product';
import { ProductAddToCart, ProductQuickView } from 'src/features/product-actions';

import styles from './styles.module.scss';

export const CartProductList: FC = () => {
   const { list } = useAppSelector((state) => state.cartSliderReducer);

   if (!list) return null;

   return (
      <Section className={styles.body}>
         <h2>Вы недавно смотрели</h2>
         <ProductList>
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
                  />{' '}
               </ProductCard>
            ))}
         </ProductList>
      </Section>
   );
};
