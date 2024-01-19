import { FC } from 'react';

import { phoneFormatter, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   withTitle?: boolean;
   className?: string;
};

export const UserPhone: FC<Props> = ({ withTitle, className }) => {
   const { tel } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${styles.phone} ${className}` : styles.phone;
   const formattedTel = phoneFormatter(tel);

   return (
      <div className={classes}>
         {withTitle ? <h3 className={styles.phone__title}>Телефон</h3> : null}
         <span>{formattedTel}</span>
      </div>
   );
};
