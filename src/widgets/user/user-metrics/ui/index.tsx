import { FC } from 'react';

import { Section } from 'src/shared';
import { UserDiscount, UserRansom } from 'src/entities/user';

import styles from './styles.module.scss';

export const UserMetrics: FC = () => {
   return (
      <Section className={styles.metrics}>
         <ul className={styles.metrics__list}>
            <li className={styles.metrics__item}>
               <UserDiscount className={styles.metrics__value} />
               <div className={styles.metrics__label}>WB скидка</div>
            </li>
            <li className={styles.metrics__item}>
               <UserRansom type="amount" className={styles.metrics__value} />
               <div className={styles.metrics__label}>Сумма выкупа</div>
            </li>
            <li className={styles.metrics__item}>
               <UserRansom type="percent" className={styles.metrics__value} />
               <div className={styles.metrics__label}>Процент выкупа</div>
            </li>
         </ul>
         <h3 className={styles.metrics__title}>Процент и сумма выкуда за 2 года</h3>
      </Section>
   );
};