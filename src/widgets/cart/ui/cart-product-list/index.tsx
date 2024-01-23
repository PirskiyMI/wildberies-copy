import { FC } from 'react';

import { useAppSelector, Section } from 'src/shared';
import { ProductCard, ProductList } from 'src/entities/product';
import { AddProductToCart, ProductQuickView } from 'src/features/product';

import styles from './styles.module.scss';

export const CartProductList: FC = () => {
   const { list } = useAppSelector((state) => state.cartSliderReducer);

   if (!list) return null;

   return (
      <Section className={styles.body} title="Вы недавно смотрели">
         <ProductList>
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
                  />{' '}
               </ProductCard>
            ))}
         </ProductList>
      </Section>
   );
};
