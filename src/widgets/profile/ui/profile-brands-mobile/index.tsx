import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Tile, useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   className?: string;
};

export const ProfileBrandsMobile: FC<Props> = ({ className }) => {
   const { favorites } = useAppSelector((state) => state.userReducer);

   const classes = className ? `${className} ${styles.brands}` : styles.brands;
   const brandsCount = favorites.brands.length;

   return (
      <Tile className={classes}>
         <Link to="/profile/user" className={styles.brands__wrapper}>
            <h2 className={styles.brands__title}>Бренды</h2>
            <div className={styles.brands__label}>{brandsCount} брендов</div>
         </Link>
      </Tile>
   );
};
