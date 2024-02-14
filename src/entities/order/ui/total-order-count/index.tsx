import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { ITotalOrderCountProps } from '../../types';

export const TotalOrderCount: FC<ITotalOrderCountProps> = memo(({ count }) => {
   return (
      <div className={styles.count}>
         <span>Товары, {count} шт.</span>
      </div>
   );
});
