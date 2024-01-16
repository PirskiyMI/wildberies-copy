import { FC } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';

const UserDiscountsTop: FC = () => {
   const { discount } = useAppSelector((state) => state.userReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   if (windowWidth >= 1024) {
      return (
         <div className={styles.discount__top}>
            <div className={styles.discount__value}>
               <span>
                  <span className={styles.discount__text}>до</span> {discount}%
               </span>
            </div>
            <h2 className={styles.discount__title}>WB скидка</h2>
         </div>
      );
   }

   return (
      <div className={styles.discount__top}>
         <h2 className={styles.discount__title}>WB скидка</h2>
         <span>
            <span className={styles.discount__text}>до</span> {discount}%
         </span>
      </div>
   );
};
const UserDiscountsBottom: FC = () => {
   return (
      <div className={styles.discount__bottom}>
         <span className={styles.discount__label}>Процент и сумма выкуда за 2 года</span>
         <p className={styles.discount__indicators}>
            <span className={styles.discount__number}>0%</span> |{' '}
            <span className={styles.discount__number}>0 ₽</span>
         </p>
      </div>
   );
};

export const UserDiscounts: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   return (
      <div className={styles.discount}>
         <UserDiscountsTop />
         {windowWidth >= 1024 && <UserDiscountsBottom />}
      </div>
   );
};
