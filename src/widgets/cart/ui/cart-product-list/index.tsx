import { FC } from 'react';

import { useAppSelector, Section } from 'src/shared';

import { ProductList } from 'src/widgets/product';
import styles from './styles.module.scss';

export const CartProductList: FC = () => {
   const { list } = useAppSelector((state) => state.visitedProductsListReducer);

   if (!list) return null;

   return (
      <Section className={styles.body} title="Вы недавно смотрели">
         <ProductList products={list} />
      </Section>
   );
};
