import { FC, ReactNode } from 'react';

import { Icon, Price, Section, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   Button: ReactNode;
};

export const Order: FC<Props> = ({ Button }) => {
   const { count, price } = useAppSelector((state) => state.orderReducer);

   return (
      <Section className={styles.order}>
         <div className={styles.order__info}>
            <div className={styles.order__title}>
               <span>Итого</span>
               <Price price={price} />
            </div>
            <div className={styles.order__count}>
               <span>Товары, {count} шт.</span>
               <Price price={price} />
            </div>
         </div>
         <div className={styles.order__bottom}>
            <div className={styles.order__button}>{Button}</div>
            <div className={styles.order__agreement}>
               <Icon icon="checkMark" className={styles.order__icon} />
               <span>Соглашаюсь с правилами пользования торговой площадкой и возврата</span>
            </div>
         </div>
      </Section>
   );
};
