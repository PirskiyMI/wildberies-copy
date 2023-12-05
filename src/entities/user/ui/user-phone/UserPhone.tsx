import { FC } from 'react';
import styles from './UserPhone.module.scss';
import { phoneFormatter, useAppSelector, useResize } from '../../../../shared/lib';

export const UserPhone: FC = () => {
   const { tel } = useAppSelector((state) => state.userReducer);
   const { width } = useResize();
   const phoneNumber = phoneFormatter(tel);

   if (width >= 1024) {
      return (
         <p className={styles.phone}>
            Телефон <span className={styles.phone__number}>{phoneNumber}</span>
         </p>
      );
   }

   return (
      <p className={styles.phone}>
         <span className={styles.phone__number}>{phoneNumber}</span>
      </p>
   );
};
