import { FC } from 'react';

import { phoneFormatter, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

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
