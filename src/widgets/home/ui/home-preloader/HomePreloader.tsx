import { FC } from 'react';

import styles from './styles.module.scss';

import { Skeleton } from '../../../../shared/ui';

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
