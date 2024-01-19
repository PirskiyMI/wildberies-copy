import { FC } from 'react';

import { Section, useAppSelector } from 'src/shared';
import { UserDiscount } from 'src/entities/user';

import styles from './styles.module.scss';

export const UserMetrics: FC = () => {
   const { discount, ransomAmount, redemptionPercentage } = useAppSelector(
      (state) => state.userReducer,
   );

   return (
      <Section className={styles.metrics}>
         <ul className={styles.metrics__list}>
            <li className={styles.metrics__item}>
               <UserDiscount title="WB скидка" value={discount + '%'} isRange />
            </li>
            <li className={styles.metrics__item}>
               <UserDiscount title="Сумма выкупа" value={ransomAmount + '₽'} />
            </li>
            <li className={styles.metrics__item}>
               <UserDiscount title="Процент выкупа" value={redemptionPercentage + '%'} />
            </li>
         </ul>
         <h3 className={styles.metrics__title}>Процент и сумма выкуда за 2 года</h3>
      </Section>
   );
};
