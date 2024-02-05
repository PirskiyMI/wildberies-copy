import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/shared';
import styles from './styles.module.scss';

export const FavoritesIsEmpty: FC = () => {
   return (
      <div className={styles.body}>
         <h2 className={styles.body__title}>В Избранном пока пусто.</h2>
         <div className={styles.body__content}>
            <p className={styles.body__text}>
               Сохраняйте товары, которые понравились, чтобы долго не искать.
            </p>
            <Button className={styles.body__button}>
               <Link to={'/'} className={styles.body__link}>
                  На главную
               </Link>
            </Button>
         </div>
      </div>
   );
};
