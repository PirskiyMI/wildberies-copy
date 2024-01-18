import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile, phoneFormatter, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileUser: FC<Props> = ({ className }) => {
   const { name } = useAppSelector((state) => state.userReducer);
   const { tel } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.user}` : styles.user;
   const nameFirstLatter = name[0];
   const phoneNumber = phoneFormatter(tel);

   return (
      <Tile className={classes}>
         <Link to="/profile/user" className={styles.user__link}>
            <div className={styles.user__top}>
               <div className={styles.user__logo}>{nameFirstLatter}</div>
               <h2 className={styles.user__name}>{name}</h2>
            </div>
            <p className={styles.user__bottom}>
               <span className={styles.user__label}>Телефон:</span> {phoneNumber}
            </p>
         </Link>
      </Tile>
   );
};
