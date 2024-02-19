import { FC } from 'react';

import styles from './styles.module.scss';
import { ISkeletonProps } from '../../lib/types/types-ui/skeleton-types';

export const Skeleton: FC<ISkeletonProps> = ({ width, height }) => {
   return (
      <div className={styles.skeleton} style={{ width: `${width}`, height: `${height}` }}>
         <div className={styles.skeleton__animation}></div>
      </div>
   );
};
