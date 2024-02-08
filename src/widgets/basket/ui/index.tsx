import { FC } from 'react';

import { Section, Spoiler, useAppSelector } from 'src/shared';
import { BasketTotalCount } from 'src/entities/basket/basket-total-count';

import styles from './styles.module.scss';
import { BasketList } from './basket-list';
import { basketTotalsSelector } from 'src/entities/basket/basket-item';

export const Basket: FC = () => {
   const { count, price } = useAppSelector(basketTotalsSelector);

   return (
      <Section title="Корзина">
         <Spoiler
            initial
            Title={<BasketTotalCount count={count} price={price} />}
            Content={
               <div className={styles.basket}>
                  <BasketList />
               </div>
            }></Spoiler>
      </Section>
   );
};
