import { FC } from 'react';
import styles from './UserFavorite.module.scss';

export const UserFavorite: FC = () => {
   return (
      <div className={styles.favorite}>
         <UserFavoriteTop />
         <UserFavoriteBottom />
      </div>
   );
};
const UserFavoriteTop: FC = () => {
   return <h2 className={styles.favorite__title}>Избранное</h2>;
};
const UserFavoriteBottom: FC = () => {
   return (
      <div className={styles.favorite__bottom}>
         <p className={styles.favorite__text}>В избранном пока пусто.</p>
         <p className={styles.favorite__text}>Сохраняйте товары, чтобы долго не искать</p>
      </div>
   );
};
