import { FC } from 'react';
import styles from './styles.module.scss';
import { ErrorList } from 'src/widgets/error/ui';

export const ErrorPage: FC = () => {
   return (
      <div className={styles.error}>
         <ErrorList />
      </div>
   );
};
