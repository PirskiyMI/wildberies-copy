import { FC } from 'react';
import styles from './styles.module.scss';
import { Tile, phoneFormatter, useAppSelector } from 'src/shared';
import { Link } from 'react-router-dom';

type Props = {
   className?: string;
};

export const UserInfo: FC<Props> = ({ className }) => {
   const { name } = useAppSelector((state) => state.userReducer);
   const { tel } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.user}` : styles.user;
   const nameFirstLatter = name[0];
   const phoneNumber = phoneFormatter(tel);

   return (
      <Tile className={classes}>
         <Link to="#" className={styles.user__link}>
            <div className={styles.user__top}>
               <div className={styles.user__logo}>{nameFirstLatter}</div>
               <h2 className={styles.user__name}>{name}</h2>
            </div>
            <p className={styles.user__bottom}>
               Телефон <span className={styles.user__phone}>{phoneNumber}</span>
            </p>
         </Link>
      </Tile>
   );
};

