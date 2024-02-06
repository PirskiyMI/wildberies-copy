import { FC } from 'react';

import { Section, Spoiler, useAppSelector } from 'src/shared';
import { BasketTotalCount } from 'src/entities/basket/basket-total-count';

import styles from './styles.module.scss';
import { BasketList } from './basket-list';

export const Basket: FC = () => {
   const { totalCount, totalPrice } = useAppSelector((state) => state.basketTotalsReducer);

   return (
      <Section title="Корзина">
         <Spoiler
            initial
            Title={<BasketTotalCount count={totalCount} price={totalPrice} />}
            Content={
               <div className={styles.basket}>
                  <BasketList />
               </div>
            }></Spoiler>
      </Section>
   );
};
