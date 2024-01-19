import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon, Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileDeliveryMobile: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.delivery}` : styles.delivery;

   return (
      <Tile className={classes}>
         <Link className={styles.delivery__wrapper} to="/profile/delivery">
            <div className={styles.delivery__content}>
               <h2 className={styles.delivery__title}>Доставки</h2>
               <div className={styles.delivery__text}>
                  <span className={styles.delivery__label}>Ближайшая</span>
                  <span> не ожидается</span>
               </div>
            </div>
            <div className={styles.delivery__image}>
               <Icon className={styles.delivery__icon} icon="delivery" />
            </div>
         </Link>
      </Tile>
   );
};
