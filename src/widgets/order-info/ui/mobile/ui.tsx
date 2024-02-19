import { FC, memo } from 'react';

import { Button, MobileSection } from 'src/shared';
import { TotalOrderCount, TotalOrderPrice } from 'src/entities/order';

import styles from './styles.module.scss';
import { IOrderInfoProps } from '../../types';

export const OrderInfo: FC<IOrderInfoProps> = memo(({ count, price }) => {
   return (
      <MobileSection className={styles.order}>
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
      </MobileSection>
   );
});
