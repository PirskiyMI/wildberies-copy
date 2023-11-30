import { FC } from 'react';
import styles from './UserPhone.module.scss';
import { phoneFormatter, useAppSelector } from '../../../shared/lib';

export const UserPhone: FC = () => {
   const { tel } = useAppSelector((state) => state.userReducer);

   const phoneNumber = phoneFormatter(tel);

   return (
      <p className={styles.phone}>
         Телефон <span className={styles.phone__number}>{phoneNumber}</span>
      </p>
   );
};
