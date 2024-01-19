import { FC } from 'react';

import { Tile } from 'src/shared';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

type Props = {
   className?: string;
};

export const ProfilePaymentMethods: FC<Props> = ({ className }) => {
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
