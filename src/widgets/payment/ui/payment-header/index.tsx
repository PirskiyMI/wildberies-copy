import { FC } from 'react';

import { Button } from 'src/shared';

import styles from './styles.module.scss';

export const PaymentHeader: FC = () => {
   return (
      <div className={styles.header}>
         <h2>Способ оплаты</h2>
         <Button isChangeButton={true}>Изменить</Button>
      </div>
   );
};
