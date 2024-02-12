import { FC, memo } from 'react';

import styles from './styles.module.scss';
import { IUserRansom } from '../../lib/types';

export const UserRansom: FC<IUserRansom> = memo(({ type, value, className }) => {
   const classes = className ? `${className} ${styles.ransom}` : styles.ransom;

   return <span className={classes}>{type === 'amount' ? `${value} сом` : `${value}%`}</span>;
});
