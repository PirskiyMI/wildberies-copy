import { FC, memo } from 'react';

import { Price } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   price: number;
};

export const TotalOrderPrice: FC<Props> = memo(({ price }) => {
   return (
      <div className={styles.total}>
         <span>Итого</span>
         <Price price={price} />
      </div>
   );
});
