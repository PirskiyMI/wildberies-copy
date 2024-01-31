import { FC } from 'react';

import { ErrorList } from 'src/widgets/error/ui';

import styles from './styles.module.scss';

export const ErrorPage: FC = () => {
   return (
      <div className={styles.error}>
         <ErrorList />
      </div>
   );
};
