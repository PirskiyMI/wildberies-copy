import { FC } from 'react';
import { Link } from 'react-router-dom';

import { phoneFormatter, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileUserMobile: FC<Props> = ({ className }) => {
   const { name } = useAppSelector((state) => state.userReducer);
   const { tel } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.user}` : styles.user;
   const nameFirstLatter = name[0];
   const phoneNumber = phoneFormatter(tel);

   return (
      <Link to="#" className={classes}>
         <div className={styles.user__logo}>{nameFirstLatter}</div>
         <div className={styles.user__info}>
            <h2 className={styles.user__name}>{name}</h2>
            <div className={styles.user__text}>
               <span className={styles.user__phone}>{phoneNumber}</span>
               <span className={styles.user__label}>Личные данные</span>
            </div>
         </div>
      </Link>
   );
};
