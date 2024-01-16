import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   className?: string;
};

export const UserDetailsGender: FC<Props> = ({ children, className }) => {
   const classes = className ? `${styles.gender} ${className}` : styles.gender;

   return (
      <div className={classes}>
         <h3 className={styles.gender__title}>Пол</h3>
         {children}
      </div>
   );
};
