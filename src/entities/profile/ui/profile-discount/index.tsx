import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileDiscount: FC<Props> = ({ className }) => {
   const { discount } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.discount}` : styles.discount;

   return (
      <Tile className={classes}>
         <Link className={styles.discount__wrapper} to="/profile/user">
            <div className={styles.discount__top}>
               <div className={styles.discount__body}>
                  <div className={styles.discount__content}>
                     <span className={styles.discount__text}>до</span>{' '}
                     <span className={styles.discount__value}>{discount}%</span>
                  </div>
               </div>
               <h2 className={styles.discount__title}>WB скидка</h2>
            </div>
            <div className={styles.discount__bottom}>
               <span className={styles.discount__label}>Процент и сумма выкуда за 2 года</span>
               <p className={styles.discount__indicators}>
                  <span className={styles.discount__number}>0%</span> |{' '}
                  <span className={styles.discount__number}>0 ₽</span>
               </p>
            </div>
         </Link>
      </Tile>
   );
};
