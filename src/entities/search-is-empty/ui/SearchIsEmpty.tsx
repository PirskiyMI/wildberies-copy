import { FC } from 'react';
import styles from './SearchIsEmpty.module.scss';

type SearchIsEmptyProps = {
   search: string;
};

export const SearchIsEmpty: FC<SearchIsEmptyProps> = ({ search }) => {
   return (
      <>
         <div className={styles.body__information}>
            <h2 className={`${styles.body__title} ${styles.body__title_not_found}`}>
               Ничего не нашлось по запросу «{search}»
            </h2>
            <p className={styles.body__text}>Попробуйте поискать по-другому или сократить запрос</p>
         </div>
         <h2 className={styles.body__title}>Возможно вам понравится:</h2>
      </>
   );
};
