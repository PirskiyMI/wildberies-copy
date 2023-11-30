import { Button, Title } from '../../../../shared/ui';
import styles from './PaymentHeader.module.scss';

import { FC } from 'react';

export const PaymentHeader: FC = () => {
   return (
      <div className={styles.header}>
         <Title>Способ оплаты</Title>
         <Button isChangeButton={true}>Изменить</Button>
      </div>
   );
};
