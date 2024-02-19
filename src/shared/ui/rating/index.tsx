import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { Icon } from '../icon';
import { IRatingProps } from '../../lib/types/types-ui/rating-types';

export const Rating: FC<IRatingProps> = memo(({ rate, count }) => {
   return (
      <div className={styles.rating}>
         <Icon icon="star" className={styles.rating__icon} /> {rate}{' '}
         <span className={styles.rating__count}>● {count} оценок</span>
      </div>
   );
});
