import { FC } from 'react';
import styles from './User.module.scss';
import { useAppSelector } from '../../../../shared/lib';

export const User: FC = () => {
   const { name } = useAppSelector((state) => state.userReducer);

   const logo = name[0];

   return (
      <div className={styles.user}>
         <div className={styles.user__logo}>{logo}</div>
         <h2 className={styles.user__name}>{name}</h2>
      </div>
   );
};
