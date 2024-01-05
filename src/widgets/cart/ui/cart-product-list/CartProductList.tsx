import { FC } from 'react';
import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';
import { Section } from '../../../../shared/ui';
import { ProductCard, ProductList } from '../../../../entities/product';
import { ProductAddToCart, ProductQuickView } from '../../../../features/product-actions';

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
