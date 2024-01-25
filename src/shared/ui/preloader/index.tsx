import { FC } from 'react';

import styles from './styles.module.scss';

export const Preloader: FC = () => {
   return (
      <div className={styles.loader}></div>
   );
};
