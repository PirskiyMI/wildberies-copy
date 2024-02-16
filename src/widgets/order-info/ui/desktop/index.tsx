import { FC, memo } from 'react';

import { Button, DesktopSection, useAppSelector } from 'src/shared';
import { TotalOrderCount, TotalOrderPrice } from 'src/entities/order';

import styles from './styles.module.scss';
import { orderTotalsSelector } from 'src/entities/basket/basket-item';

export const OrderInfo: FC = memo(() => {
   const { count, price } = useAppSelector(orderTotalsSelector);

   return (
      <DesktopSection className={styles.order}>
         <div className={styles.order__info}>
            <TotalOrderCount count={count} />
            <TotalOrderPrice price={price} />
         </div>
         <div className={styles.order__bottom}>
            <Button className={styles.order__button}>Заказать</Button>
            <div className={styles.order}>
               <span>* Соглашаюсь с правилами пользования торговой площадкой и возврата</span>
            </div>
         </div>
      </DesktopSection>
   );
});
