import { FC } from 'react';

import { Skeleton } from 'src/shared';

import styles from './styles.module.scss';

export const ProductSkeletonList: FC = () => {
   return (
      <div className={styles.skeleton}>
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
         <Skeleton height="340px" width="100%" />
      </div>
   );
};
