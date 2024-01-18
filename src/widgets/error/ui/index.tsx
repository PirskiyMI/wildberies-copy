import { FC } from 'react';
import styles from './styles.module.scss';
import { Button, Error } from 'src/shared';

export const ErrorList: FC = () => {
   return (
      <div className={styles.error}>
         <Error />
         <Button>Кнопка</Button>
      </div>
   );
};
