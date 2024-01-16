import { FC } from 'react';

import styles from './styles.module.scss';
import { Icon } from '../icon';


type RatingProps = {
   rate: number;
   count: string | number;
};

export const Rating: FC<RatingProps> = ({ rate, count }) => {
   return (
      <div className={styles.rating}>
         <Icon icon="rating" className={styles.rating__icon} /> {rate}{' '}
         <span className={styles.rating__count}>● {count} оценок</span>
      </div>
   );
};
