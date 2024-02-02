import { FC } from 'react';

import styles from './styles.module.scss';
import { CleatProductSearch } from 'src/features/product';

type Props = {
   searchValue: string;
};

export const ProductListIsEmpty: FC<Props> = ({ searchValue }) => {
   return (
      <div className={styles.body}>
         <h2 className={styles.body__title}>Ничего не нашлось по запросу <br />«{searchValue}»</h2>
         <p className={styles.body__text}>Попробуйте поискать по-другому или сократить запрос</p>
         <div className={styles.body__button}>
            <CleatProductSearch />
         </div>
      </div>
   );
};
