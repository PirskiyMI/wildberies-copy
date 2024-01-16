import { Button } from '../../../../shared/ui';
import styles from './styles.module.scss';

import { FC } from 'react';

export const PaymentHeader: FC = () => {
   return (
      <div className={styles.header}>
         <h2>Способ оплаты</h2>
         <Button isChangeButton={true}>Изменить</Button>
      </div>
   );
};
