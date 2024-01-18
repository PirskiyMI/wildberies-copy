import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfilePurchasesMobile: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.purchases}` : styles.purchases;

   const { purchases } = useAppSelector((state) => state.userReducer);

   return (
      <Tile className={classes}>
         <Link to="/profile/purchases" className={styles.purchases__wrapper}>
            <div className={styles.purchases}>
               <h2 className={styles.purchases__title}>Покупки</h2>
               <div className={styles.purchases__content}>
                  <p className={styles.purchases__text}>{purchases.length} товаров</p>
               </div>
            </div>
         </Link>
      </Tile>
   );
};
