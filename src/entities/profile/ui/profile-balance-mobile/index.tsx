import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileBalanceMobile: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.balance}` : styles.balance;

   return (
      <Tile className={classes}>
         <Link className={styles.balance__wrapper} to="/profile/user">
            <h2 className={styles.balance__title}>Баланс</h2>
            <div className={styles.balance__label}>
               <span className={styles.balance__icon}>Б</span>
               <span className={styles.balance__value}> 0 сом</span>
            </div>
         </Link>
      </Tile>
   );
};
