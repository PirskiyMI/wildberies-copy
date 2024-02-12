import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { IUserGender } from '../../lib/types';

export const UserGender: FC<IUserGender> = memo(({ switcher, className }) => {
   const classes = className ? `${styles.gender} ${className}` : styles.gender;

   return (
      <div className={classes}>
         <h3 className={styles.gender__title}>Пол</h3>
         {switcher}
      </div>
   );
});
