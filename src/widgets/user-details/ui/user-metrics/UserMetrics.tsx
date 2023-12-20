import { FC } from 'react';
import styles from './UserMetrics.module.scss';
import { Section } from '../../../../shared/ui';
import { useAppSelector } from '../../../../shared/lib';
import { UserDetailsIndicator } from '../../../../entities/user';

export const UserMetrics: FC = () => {
   const { discount, ransomAmount, redemptionPercentage } = useAppSelector(
      (state) => state.userReducer,
   );

   return (
      <Section className={styles.metrics}>
         <ul className={styles.metrics__list}>
            <li className={styles.metrics__item}>
               <UserDetailsIndicator title="WB скидка" value={discount + '%'} isRange isColored />
            </li>
            <li className={styles.metrics__item}>
               <UserDetailsIndicator title="Сумма выкупа" value={ransomAmount + '₽'} />
            </li>
            <li className={styles.metrics__item}>
               <UserDetailsIndicator title="Процент выкупа" value={redemptionPercentage + '%'} />
            </li>
         </ul>
         <h3 className={styles.metrics__title}>Процент и сумма выкуда за 2 года</h3>
      </Section>
   );
};
