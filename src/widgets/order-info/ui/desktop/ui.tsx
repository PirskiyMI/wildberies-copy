import { FC, memo } from 'react';

import { Button, DesktopSection } from 'src/shared';
import { TotalOrderCount, TotalOrderPrice } from 'src/entities/order';

import styles from './styles.module.scss';
import { IOrderInfoProps } from '../../types';

export const OrderInfo: FC<IOrderInfoProps> = memo(({ count, price }) => {
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
