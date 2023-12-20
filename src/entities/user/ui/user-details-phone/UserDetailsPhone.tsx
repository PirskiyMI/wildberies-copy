import { FC } from 'react';
import styles from './UserDetailsPhone.module.scss';
import { phoneFormatter, useAppSelector } from '../../../../shared/lib';

type Props = {
   className?: string;
};

export const UserDetailsPhone: FC<Props> = ({ className }) => {
   const { tel } = useAppSelector((state) => state.userReducer);
   const phoneNumber = phoneFormatter(tel);
   const classes = className ? `${styles.phone} ${className}` : styles.phone;

   return (
      <div className={classes}>
         <h3 className={styles.phone__title}>Телефон</h3> <span>{phoneNumber}</span>
      </div>
   );
};
