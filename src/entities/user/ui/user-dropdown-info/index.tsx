import { FC } from 'react';

import { phoneFormatter, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const UserDropdownInfo: FC<Props> = ({ className }) => {
   const { name, tel } = useAppSelector((state) => state.userReducer);
   const classes = className ? `${className} ${styles.user}` : styles.user;
   const phone = phoneFormatter(tel);

   const nameFirstLatter = name[0];

   return (
      <div className={classes}>
         <div className={styles.user__avatar}>
            <span>{nameFirstLatter}</span>
         </div>
         <div className={styles.user__info}>
            <p className={styles.user__name}>{name}</p>
            <p className={styles.user__phone}>{phone}</p>
         </div>
      </div>
   );
};
