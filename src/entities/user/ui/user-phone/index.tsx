import { FC } from 'react';

import { phoneFormatter, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

export const UserPhone: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { tel } = useAppSelector((state) => state.userReducer);
   const phoneNumber = phoneFormatter(tel);

   if (windowWidth >= 1024) {
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
