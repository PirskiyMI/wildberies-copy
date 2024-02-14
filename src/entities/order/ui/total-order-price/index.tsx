import { FC, memo } from 'react';

import { Price } from 'src/shared';

import styles from './styles.module.scss';
import { ITotalOrderPriceProps } from '../../types';

export const TotalOrderPrice: FC<ITotalOrderPriceProps> = memo(({ price }) => {
   return (
      <div className={styles.total}>
         <span>Итого</span>
         <Price price={price} />
      </div>
   );
});
