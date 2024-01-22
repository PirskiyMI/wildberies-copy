import { FC } from 'react';

import { OrderAgreement, OrderCount, OrderSum } from 'src/entities/order';
import { Button, Section, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

export const CartOrder: FC = () => {
   const { count, price } = useAppSelector((state) => state.orderReducer);

   return (
      <Section className={styles.order}>
         <div className={styles.order__info}>
            <OrderCount count={count} />
            <OrderSum price={price} />
         </div>
         <div className={styles.order__bottom}>
            <Button className={styles.order__button}>Заказать</Button>
            <OrderAgreement />
         </div>
      </Section>
   );
};
