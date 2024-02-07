import { FC, memo } from 'react';

import styles from './styles.module.scss';

type Props = {
   count: number;
};

export const TotalOrderCount: FC<Props> = memo(({ count }) => {
   return (
      <div className={styles.count}>
         <span>Товары, {count} шт.</span>
      </div>
   );
});
