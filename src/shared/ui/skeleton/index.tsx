import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
   width: string;
   height: string;
};

export const Skeleton: FC<Props> = ({ width, height }) => {
   return (
      <div className={styles.skeleton} style={{ width: `${width}`, height: `${height}` }}>
         <div className={styles.skeleton__animation}></div>
      </div>
   );
};
