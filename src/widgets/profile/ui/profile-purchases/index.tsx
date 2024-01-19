import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfilePurchases: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.purchases}` : styles.purchases;

   return (
      <Tile className={classes}>
         <Link to="/profile/purchases" className={styles.purchases__wrapper}>
            <h2 className={styles.purchases__title}>Покупки</h2>
            <div className={styles.purchases__content}>
               <p className={styles.purchases__text}>В покупках пока пусто.</p>
               <p className={styles.purchases__text}>Покупайте товары и они окажутся здесь</p>
            </div>
         </Link>
      </Tile>
   );
};
