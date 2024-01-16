import { FC } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';

export const UserPurchases: FC = () => {
   return (
      <div className={styles.purchases}>
         <UserPurchasesTop />
         <UserPurchasesBottom />
      </div>
   );
};
const UserPurchasesTop: FC = () => {
   return <h2 className={styles.purchases__title}>Покупки</h2>;
};
const UserPurchasesBottom: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { purchases } = useAppSelector((state) => state.userReducer);

   if (windowWidth >= 1024) {
      return (
         <div className={styles.purchases__bottom}>
            <p className={styles.purchases__text}>В покупках пока пусто.</p>
            <p className={styles.purchases__text}>Покупайте товары и они окажутся здесь</p>
         </div>
      );
   }

   return (
      <div className={styles.purchases__bottom}>
         <p className={styles.purchases__text}>{purchases.length} товаров</p>
      </div>
   );
};
