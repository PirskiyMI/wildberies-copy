import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfilePaymentMethodsMobile: FC<Props> = ({ className }) => {
   const classes = className ? `${className} ${styles.payment}` : styles.payment;

   return (
      <Tile className={classes}>
         <Link className={styles.payment__wrapper} to="/profile/user">
            <h2 className={styles.payment__title}>Способы оплаты</h2>
            <span className={styles.payment__label}>Добавить карту</span>
         </Link>
      </Tile>
   );
};
