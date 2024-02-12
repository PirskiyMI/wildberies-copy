import { FC } from 'react';

import styles from './styles.module.scss';
import { IUserPhone } from '../../lib/types';

export const UserPhone: FC<IUserPhone> = ({ phone, withTitle, className }) => {
   const classes = className ? `${styles.phone} ${className}` : styles.phone;

   return (
      <div className={classes}>
         {withTitle ? <h3 className={styles.phone__title}>Телефон</h3> : null}
         <span>{phone}</span>
      </div>
   );
};
