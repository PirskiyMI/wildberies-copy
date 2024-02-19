import { FC } from 'react';

import styles from './styles.module.scss';

export const Preloader: FC = () => {
   return (
      <div className={styles.preloader}>
         <div className={styles.preloader__body}></div>
      </div>
   );
};
