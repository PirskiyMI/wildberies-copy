import { FC } from 'react';
import styles from './UserFavoriteBrands.module.scss';
import { useAppSelector } from '../../../../shared/lib';

export const UserFavoriteBrands: FC = () => {

   return (
      <div className={styles.brands}>
         <UserFavoriteBrandsTop />
         <UserFavoriteBrandsBottom />
      </div>
   );
};
const UserFavoriteBrandsTop: FC = () => {
   return <h2 className={styles.brands__title}>Бренды</h2>;
};
const UserFavoriteBrandsBottom: FC = () => {
   const { favorites } = useAppSelector((state) => state.userReducer);
   const { brands } = favorites;

   return <div className={styles.brands__label}>{brands.length} брендов</div>;
};
