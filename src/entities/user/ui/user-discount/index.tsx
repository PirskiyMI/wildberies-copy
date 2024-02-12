import { FC } from 'react';

import styles from './styles.module.scss';
import { IUserDiscount } from '../../lib/types';

export const UserDiscount: FC<IUserDiscount> = ({ discount, className }) => {
   const classes = className ? `${styles.discount} ${className}` : styles.discount;

   return (
      <div className={classes}>
         <span className={styles.discount__content}>
            <span className={styles.discount__text}>до</span> {discount}%
         </span>
      </div>
   );
};
