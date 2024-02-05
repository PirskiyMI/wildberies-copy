import { FC } from 'react';

import { Section, Spoiler, useAppSelector } from 'src/shared';
import { BasketInfo } from 'src/entities/basket';

import styles from './styles.module.scss';
import { BasketList } from './basket-list';

export const Basket: FC = () => {
   const { totalCount, totalPrice } = useAppSelector((state) => state.basketReducer);

   return (
      <Section title="Корзина">
         <Spoiler
            initial
            Title={<BasketInfo count={totalCount} price={totalPrice} />}
            Content={
               <div className={styles.basket}>
                  <BasketList />
               </div>
            }></Spoiler>
      </Section>
   );
};
