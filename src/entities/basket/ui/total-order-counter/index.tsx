import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
   count: number;
};

export const TotalOrderCounter: FC<Props> = ({ count }) => {
   return (
      <div className={styles.counter}>
         <span>Товары, {count} шт.</span>
      </div>
   );
};
