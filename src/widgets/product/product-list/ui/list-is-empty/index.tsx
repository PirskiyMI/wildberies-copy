import { FC } from 'react';

import { ClearProductSearch } from 'src/features/product/product-search';

import styles from './styles.module.scss';
import { IListIsEmptyProps } from '../../lib/types';

export const ListIsEmpty: FC<IListIsEmptyProps> = ({ searchValue }) => {
   return (
      <div className={styles.body}>
         <h2 className={styles.body__title}>
            Ничего не нашлось по запросу <br />«{searchValue}»
         </h2>
         <p className={styles.body__text}>Попробуйте поискать по-другому или сократить запрос</p>
         <div className={styles.body__button}>
            <ClearProductSearch />
         </div>
      </div>
   );
};
