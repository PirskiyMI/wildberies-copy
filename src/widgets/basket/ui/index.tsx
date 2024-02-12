import { FC } from 'react';

import { Section, Spoiler } from 'src/shared';
import { BasketTotalCount } from 'src/entities/basket/basket-total-count';

import styles from './styles.module.scss';
import { BasketList } from './basket-list';
import { IBasket } from '../lib/types';

export const Basket: FC<IBasket> = ({ count, price, ...props }) => {
   return (
      <Section title="Корзина">
         <Spoiler
            initial
            Title={<BasketTotalCount count={count} price={price} />}
            Content={
               <div className={styles.basket}>
                  <BasketList {...props} />
               </div>
            }></Spoiler>
      </Section>
   );
};
