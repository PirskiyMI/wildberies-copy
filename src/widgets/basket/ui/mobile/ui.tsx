import { FC } from 'react';

import { DesktopSection, Spoiler } from 'src/shared';
import { BasketTotalCount } from 'src/entities/basket/basket-total-count';

import styles from './styles.module.scss';
import { MobileBasketList } from '../basket-list';
import { IBasket } from '../../types';

export const Basket: FC<IBasket> = ({ count, price, ...props }) => {
   return (
      <DesktopSection title="Корзина">
         <Spoiler
            initial
            Title={<BasketTotalCount count={count} price={price} />}
            Content={
               <div className={styles.basket}>
                  <MobileBasketList {...props} />
               </div>
            }></Spoiler>
      </DesktopSection>
   );
};
