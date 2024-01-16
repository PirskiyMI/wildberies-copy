import { FC } from 'react';

import { Skeleton } from 'src/shared';

import styles from './styles.module.scss';

export const HomePreloader: FC = () => {
   return (
      <div className={styles.preloader}>
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
         <Skeleton height="100%" width="100%" />
      </div>
   );
};
