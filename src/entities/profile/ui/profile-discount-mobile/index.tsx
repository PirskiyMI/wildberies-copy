import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileDiscountMobile: FC<Props> = ({ className }) => {
   const { discount } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.discount}` : styles.discount;

   return (
      <Tile className={classes}>
         <Link className={styles.discount__wrapper} to="/profile/user">
            <h2 className={styles.discount__title}>WB скидка</h2>
            <p className={styles.discount__value}>
               <span className={styles.discount__text}>до</span> {discount}%
            </p>
         </Link>
      </Tile>
   );
};
