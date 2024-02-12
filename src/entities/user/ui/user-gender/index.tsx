import { FC } from 'react';

import styles from './styles.module.scss';
import { IUserGender } from '../../types';

export const UserGender: FC<IUserGender> = ({ switcher, className }) => {
   const classes = className ? `${styles.gender} ${className}` : styles.gender;

   return (
      <div className={classes}>
         <h3 className={styles.gender__title}>Пол</h3>
         {switcher}
      </div>
   );
};
