import { FC } from 'react';
import styles from './UserDiscounts.module.scss';

export const UserDiscounts: FC = () => {
   return (
      <div className={styles.discount}>
         <div className={styles.discount__value}>
            <span>
               <span className={styles.discount__text}>до</span> 27%
            </span>
         </div>
         <h2 className={styles.discount__title}>WB скидка</h2>
      </div>
   );
};
