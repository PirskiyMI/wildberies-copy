import { FC } from 'react';
import styles from './CartProductList.module.scss';
import { useAppSelector } from '../../../../shared/lib';
import { ProductCard, ProductList } from '../../../../entities/product';
import { Section, Title } from '../../../../shared/ui';
import { AddToCart, QuickView } from '../../../../features/product-actions';

export const CartProductList: FC = () => {
   const { list } = useAppSelector((state) => state.productVisitedListSlice);

   if (!list) return null;

   return (
      <Section className={styles.body}>
         <Title>Вы недавно смотрели</Title>
         <ProductList>
            {list.map((el) => (
               <ProductCard key={el.id} product={el}>
                  <QuickView product={el} />
                  <AddToCart
                     product={{ id: el.id, image: el.image, price: el.price, title: el.title }}
                  />{' '}
               </ProductCard>
            ))}
         </ProductList>
      </Section>
   );
};
